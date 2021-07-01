import './style.scss';
import Typography from '../Typography';

export default function Input({style,min, placeholder, disabled}){


    return (
        <div className="flex align-center" style={{maxWidth: '20%'}}>
            <label className="input-label-placeholder">$</label>
            <input min={min} placeholder={placeholder} className={`input-primary ${disabled && 'input-disabled'}`} style={style} disabled={disabled}/>
        </div>
    )
}