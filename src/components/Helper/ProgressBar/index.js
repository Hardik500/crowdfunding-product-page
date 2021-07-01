import './style.scss';

export default function ProgressBar({progress}){
    return (
        <div className="progress-bar-border">
            <div className="progress-bar" style={{width: progress + '%'}}></div>
        </div>
    )
}