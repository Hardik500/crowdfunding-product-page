import './style.scss'

import StatsComponent from '../StatsComponent'
import Typography from '../Typography';
import Button from '../Button';

export default function ProductCard({heading, subheading, body, quantity, btnTitle = "Select Reward", disabled}){
    return (
        <div className={`product-card-container ${disabled && 'product-card-disabled'}`}>
            <Typography variant="subheading1" fontWeight={700}>{heading}</Typography>
            <div style={{marginBottom: '10px'}}/>
            <Typography variant="subheading1" color="primary">{subheading}</Typography>
            <Typography variant="body2" color="grey">{body}</Typography>

            <StatsComponent heading={quantity} subheading="left" style={{justifyContent: 'flex-start'}}/>
            <br/>
            <Button title={btnTitle} disabled={disabled} style={{padding: '15px 30px'}}/>
        </div>
    )
}