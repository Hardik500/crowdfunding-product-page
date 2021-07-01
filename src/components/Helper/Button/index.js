import './style.scss';
import Typography from '../Typography';

export default function Button({style, onClick, title, disabled}){
    return (
        <button onClick={onClick} className={`button-primary ${disabled && 'button-disabled'}`} style={style} disabled={disabled}>
            <Typography variant="subheading2" fontWeight={700}>{title}</Typography>
        </button>
    )
}