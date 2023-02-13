import { useState } from "react";
import Input from "../Inputs/Input";
import './Education.css'
import { handleChange } from "../../Validate";

const Education = ({ formDataInfo, formDataSet, errors, setErrors }) => {
    function changeHandler(event) {
        const { name, value } = event.target;
        let oldData = formDataInfo;
        console.log(oldData)
        oldData[name] = value;
        handleChange(event, errors, setErrors);
        formDataSet({ ...formDataInfo, ...oldData });
    }
    return (
        <div className="center-side">
            <div className='info-box'>
                <div className='Private-Info'>განათლება</div>
                <div className='page-num'>3/3</div>
            </div>
            <div className='info-line'></div>

            <Input type={'max'} name='school' label='სასწავლებელი' formData={errors.school} value={formDataInfo.school}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <div className="degree-date">
                <div className="degree">
                    <Input type={'min'} name='degree' label='ხარისხი' formData={errors.degree} value={formDataInfo.degree}
                        validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />
                </div>
                <div className='header'>დამთავრების რიცხვი
                    <input type='date' name='schooldate' formData={errors.schooldate}
                        onChange={changeHandler} />
                </div>
            </div>
            <div className={`margin-input ${formDataInfo.edudescription ? 'green-border' : ''}`}>
                <label className='header'>აღწერა</label>
                <textarea className='aboutme-input' name='edudescription' value={formDataInfo.edudescription} onChange={changeHandler}></textarea>
            </div>
            <div className='break-line'></div>
            <div className='box-of-addmore'>
                <div className='addmore' >მეტი სასწავლებლის დამატება</div>
            </div>
        </div>
    )
}

export default Education;