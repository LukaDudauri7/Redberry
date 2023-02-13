import './Input.css'

const Input = ({type, name, label, validText, formData, handleChange, value}) => {
    return (
        <div className={`input ${formData}`}>
                <label className='header'>{label}</label>
                <input placeholder={label} className={type} type="text" name={name} value={value} onInput={handleChange} />
                <label className='validate'>{validText}</label>
        </div>
    )
}

export default Input;