import { useState } from "react";
import Input from "../Inputs/Input";
import './Education.css'
import { handleChange } from "../../Validate";

const Education = ({ formDataInfo, formDataSet, errors, setErrors }) => {
    function changeHandler(event) {
        const { name, value } = event.target;
        let oldData = formDataInfo.educations[0];
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

            <Input type={'max'} name='institute' label='სასწავლებელი' formData={errors.school} value={formDataInfo.educations[0].institute}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <div className="degree-date">
                <div className="degree">
                    <Input type={'min'} name='degree' label='ხარისხი' formData={errors.degree} value={formDataInfo.educations[0].degree}
                        validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />
                </div>
                <div className='header'>დამთავრების რიცხვი
                    <input type='date' name='due_date' formData={errors.schooldate}
                        onChange={changeHandler} />
                </div>
            </div>
            <div className={`margin-input ${formDataInfo.educations[0].description ? 'green-border' : ''}`}>
                <label className='header'>აღწერა</label>
                <textarea className='aboutme-input' name='description' value={formDataInfo.educations[0].description} onChange={changeHandler}></textarea>
            </div>
            <div className='break-line'></div>
            <div className='box-of-addmore'>
                <div className='addmore' >მეტი სასწავლებლის დამატება</div>
            </div>
        </div>
    )
}

export default Education;