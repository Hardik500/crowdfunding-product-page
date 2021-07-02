import './style.scss'

import { useMediaQuery } from 'react-responsive'

import Typography from '../Typography';

export default function StatsComponent({direction="horizontal", heading, subheading, style}){
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1440px)' })

    return (
        <div className={`flex align-center ${direction === 'vertical' ? 'flex-vertical' : ''}`} style={style}>
            <Typography variant={isDesktopOrLaptop ? "h5" : "h6"} fontWeight={700}>{heading}</Typography>
            <div className="stats-seperator"/>
            <Typography color="grey" variant="subheading1">{subheading}</Typography>
        </div>
    )
}