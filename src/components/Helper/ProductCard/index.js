import './style.scss'

import { useFunds } from '../../Context/FundProvider';

import StatsComponent from '../StatsComponent'
import Typography from '../Typography';
import Button from '../Button';
import Input from '../Input';

export default function ProductCard({index, heading, pledgeAmount, performSupportAction, body, quantity, btnTitle = "Select Reward", disabled, selectable, selected}){
    const { selectProductCard, toggleSupportModal } = useFunds();

    return (
        <div className={`product-card-container ${selected && 'product-card-selected'} ${disabled && 'product-card-disabled'}`} onClick={(e) => {!disabled && selectProductCard(index)}}>
            <div className="flex align-center">
                <div>
                    {selectable && (
                        <div className="radio-toolbar">
                            <input type="radio" className="product-card-radio-btn" disabled={disabled} checked={selected} readOnly/>
                            <div className="radio-toolbar-btn-container"/>
                        </div>
                    )}
                </div>
                <div>
                    <Typography variant="subheading1" fontWeight={700}>{heading}</Typography>
                    {pledgeAmount ? (
                        <>
                        <div style={{marginBottom: '10px'}}/>
                        <Typography variant="subheading1" color="primary">Pledge ${pledgeAmount} or more</Typography>
                        </>
                    ) : null}
                </div>
            </div>
            <Typography variant="body2" color="grey">{body}</Typography>

            {pledgeAmount ? <StatsComponent heading={quantity} subheading="left" style={{justifyContent: 'flex-start'}}/> : null}
    
            <br/>

            {
                !selectable ? <Button onClick={() => {toggleSupportModal(true); selectProductCard(index)}} title={btnTitle} disabled={disabled} style={{padding: '15px 30px'}}/> : null
            }
            
            {
                (selectable && !disabled && selected) ? (
                    <>
                        <hr/>
                        <div className="flex justify-center flex-vertical">
                            {pledgeAmount ? <Typography variant="subheading1">Enter your pledge</Typography> : null}
                            <br/>
                            <div className="flex" style={{justifyContent: 'space-between'}}>
                                {pledgeAmount ? <Input placeholder="0" min={pledgeAmount} disabled={disabled} style={{padding: '15px 30px'}}/> : null}
                                <Button onClick={performSupportAction} title="Continue" disabled={disabled} style={{padding: '15px 30px'}}/>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </div>
    )
}