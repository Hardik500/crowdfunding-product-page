import './style.scss';

import {useState} from 'react';

export default function Input({style,min, placeholder, disabled}){
    const [inputValue, setInputValue] = useState(min);

    return (
        <div className="flex align-center" style={{maxWidth: '20%'}}>
            <label className="input-label-placeholder">$</label>
            <input type="number" value={inputValue} min={min} placeholder={placeholder} className={`input-primary ${disabled && 'input-disabled'}`} style={style} disabled={disabled} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}