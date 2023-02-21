import './Experience.css';
import Input from '../Inputs/Input';
import { handleChange } from '../../Validate';

const Experience = ({ formDataInfo, formDataSet, errors, setErrors }) => {

    function changeHandler(event) {
        const { name, value } = event.target;
        let oldData = formDataInfo.experiences[0];
        oldData[name] = value;
        handleChange(event, errors, setErrors);
        formDataSet({ ...formDataInfo, ...oldData });
    }
    return (
        <div>
            <Input type={'max'} name='position' label='თანამდებობა' formData={errors.position} value={formDataInfo.experiences[0].position}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <Input type={'max'} name='employer' label='დამსაქმებელი' formData={errors.employer} value={formDataInfo.experiences[0].employer}
                validText='მინიმუმ 2 სიმბოლო' handleChange={changeHandler} />

            <div className='dates'>
                <div className='header'>დაწყების რიცხვი
                    <input type='date' name='start_date' formData={errors.startdate}
                        value={formDataInfo.experiences[0].start_date} onChange={changeHandler} />
                </div>

                <div className='header'>დამთავრების რიცხვი
                    <input type='date' name='due_date' formData={errors.enddate}
                        value={formDataInfo.experiences[0].due_date} onChange={changeHandler} />
                </div>
            </div>
            <div className={`margin-input ${formDataInfo.experiences[0].description ? 'green-border' : ''}`}>
                <label className='header'>აღწერა</label>
                <textarea className='aboutme-input' name='description' value={formDataInfo.experiences[0].description} onChange={changeHandler}></textarea>
            </div>

            <div className='break-line'></div>
        </div>
    )
}

export default Experience;