import './style.scss'

import Typography from '../Typography';

export default function StatsComponent({direction="horizontal", heading, subheading, style}){
    return (
        <div className={`flex align-center ${direction === 'vertical' ? 'flex-vertical' : ''}`} style={style}>
            <Typography variant="h6" fontWeight={700}>{heading}</Typography>
            <div className="stats-seperator"/>
            <Typography color="grey" variant="subheading1">{subheading}</Typography>
        </div>
    )
}