import './style.scss'

import { useMediaQuery } from 'react-responsive'

import { useFunds } from '../../Context/FundProvider';

import StatsComponent from '../StatsComponent'
import Typography from '../Typography';
import Button from '../Button';
import Input from '../Input';

export default function ProductCard({ index, heading, pledgeAmount, performSupportAction, body, quantity, btnTitle = "Select Reward", disabled, selectable, selected }) {
    const { selectProductCard, toggleSupportModal } = useFunds();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1440px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1440px)' })

    return (
        <div className={`product-card-container ${selected && 'product-card-selected'} ${disabled && 'product-card-disabled'}`} onClick={(e) => { !disabled && selectProductCard(index) }}>
            <div className="flex align-center">
                <div>
                    {selectable && (
                        <div className="radio-toolbar">
                            <input type="radio" className="product-card-radio-btn" disabled={disabled} checked={selected} readOnly />
                            <div className="radio-toolbar-btn-container" />
                        </div>
                    )}
                </div>
                {(selectable) ? (
                    <div className="product-card-heading">
                        <div className={`flex ${isTabletOrMobile && 'flex-vertical'}`}>
                            <Typography variant="subheading1" fontWeight={700}>{heading}</Typography>
                            <div style={{ marginRight: '20px' }}></div>
                            {pledgeAmount ? (
                                <Typography variant="subheading1" color="primary">Pledge ${pledgeAmount} or more</Typography>
                            ) : null}
                        </div>

                        {isDesktopOrLaptop && <StatsComponent heading={quantity} subheading="left" style={{ justifyContent: 'flex-start' }} />}
                    </div>
                ) : (
                    <div className="product-card-heading">

                        <Typography variant="subheading1" fontWeight={700}>{heading}</Typography>
                        {pledgeAmount ? (
                            <>
                                <div style={{ marginBottom: '10px' }} />
                                <Typography variant="subheading1" color="primary">Pledge ${pledgeAmount} or more</Typography>
                            </>
                        ) : null}
                    </div>
                )}
            </div>

            <div style={{ marginLeft: (isDesktopOrLaptop && selectable) && '35px' }}>
                <Typography variant="body2" color="grey">{body}</Typography>
            </div>

            <div className="prduct-card-select-reward">
                {((isDesktopOrLaptop && !selectable) | isTabletOrMobile) && pledgeAmount ? <StatsComponent heading={quantity} subheading="left" style={{ justifyContent: 'flex-start' }} /> : null}

                <br />

                {
                    !selectable ? <Button onClick={() => { toggleSupportModal(true); selectProductCard(index) }} title={btnTitle} disabled={disabled} style={{ padding: '15px 30px' }} /> : null
                }
            </div>

            {
                (selectable && !disabled && selected) ? (
                    <>
                        <hr />
                        <br/>
                        <div className={`flex ${isTabletOrMobile ? 'justify-center flex-vertical' : 'align-center justify-space-between'}`}>
                            {pledgeAmount ? <Typography variant="subheading1" style={{textAlign: isTabletOrMobile && 'center'}}>Enter your pledge</Typography> : null}
                            <br />
                            <div className="flex" style={{ justifyContent: 'space-between', maxWidth: isDesktopOrLaptop && '40%' }}>
                                {pledgeAmount ? <Input placeholder="0" min={pledgeAmount} disabled={disabled} style={{ padding: '15px 30px' }} /> : null}
                                <Button onClick={performSupportAction} title="Continue" disabled={disabled} style={{ padding: '10px 30px' }} />
                            </div>
                        </div>
                    </>
                ) : null
            }
        </div>
    )
}