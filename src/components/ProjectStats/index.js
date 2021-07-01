import './style.scss'

import BaseLayout from '../Layout/BaseLayout';
import StatsComponent from '../Helper/StatsComponent';
import ProgressBar from '../Helper/ProgressBar';

export default function ProjectStats() {
    return (
        <BaseLayout>
            <div className="project-stats-container">
                <StatsComponent heading="$89,914" subheading="of $100,000 backed" direction="vertical"/>
                <div className="flex justify-center hr-container">
                    <div className="hr-seperator"/>
                </div>
                <StatsComponent heading="5,007" subheading="total backers" direction="vertical"/>
                <div className="flex justify-center hr-container">
                    <div className="hr-seperator"/>
                </div>
                <StatsComponent heading="56" subheading="days left" direction="vertical"/>
                <div style={{marginBottom: 35}}/>
                <ProgressBar progress={80}/>
            </div>
        </BaseLayout>
    )
}