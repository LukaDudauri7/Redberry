import './Experience.css';
import { useState } from 'react';
import Input from '../Inputs/Input';
import { handleChange } from '../../Validate';
import pageNumBefore from '../Main/Main'

const Experience = ({ formDataInfo, formDataSet, errors, setErrors }) => {

    function changeHandler(event) {
        const { name, value } = event.target;
        let oldData = formDataInfo;
        console.log(name, value)
        oldData[name] = value;
        handleChange(event, errors, setErrors);
        formDataSet({ ...formDataInfo, ...oldData });
    }
    return (
        <div>
            <Input type={'max'} name='position' label='თანამდებობა' formData={errors.position} value={formDataInfo.position}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <Input type={'max'} name='employer' label='დამსაქმებელი' formData={errors.employer} value={formDataInfo.employer}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <div className='dates'>
                <div className='header'>დაწყების რიცხვი
                    <input type='date' name='startdate' formData={errors.startdate}
                        value={formDataInfo.startdate} onChange={changeHandler} />
                </div>

                <div className='header'>დამთავრების რიცხვი
                    <input type='date' name='enddate' formData={errors.enddate}
                        value={formDataInfo.enddate} onChange={changeHandler} />
                </div>
            </div>
            <div className={`margin-input ${formDataInfo.description ? 'green-border' : ''}`}>
                <label className='header'>აღწერა</label>
                <textarea className='aboutme-input' name='description' value={formDataInfo.description} onChange={changeHandler}></textarea>
            </div>

            <div className='break-line'></div>
        </div>
    )
}

export default Experience;