import { useState } from 'react';
import Input from '../Inputs/Input';
import { json, Link } from 'react-router-dom';
import {handleChange, changeHandler} from '../../Validate'
import './Private.css'

const Private = ({ formDataInfo, formDataSet, errors, setErrors }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    function changeHandler(event) {
        let { name, value } = event.target;
        let oldData = formDataInfo;
        if(name == 'file'){
            value = URL.createObjectURL(event.target.files[0])
        }
        oldData[name] = value;
        handleChange(event, errors, setErrors);
        formDataSet({ ...formDataInfo, ...oldData });
    }
    const addFile = () => {
        // setSelectedFile(e.target.files[0])
        // formDataInfo.append("file", selectedFile);
    }
    const submitForm = () => {
        // const formData = new FormData();

        // axios
        //   .post(UPLOAD_URL, formData)
        //   .then((res) => {
        //     alert("File Upload success");
        //   })
        //   .catch((err) => alert("File Upload Error"));
    };

    return (
        <div className='first-side'>
            <div className='center-side'>
                <div className='info-box'>
                    <div className='Private-Info'>პირადი ინფო</div>
                    <div className='page-num'>1/3</div>
                </div>
                <div className='info-line'></div>

                <div className='box-of-input'>
                    <Input type={'min'} name='firstName' label='სახელი' value={formDataInfo.firstName} formData={errors.firstName}
                        validText='მინიმუმ 2 ასო, ქართული ასოები' handleChange={changeHandler} />

                    <Input type={'min'} name='surname' label='გვარი' value={formDataInfo.surname} formData={errors.surname}
                        validText='მინიმუმ 2 ასო, ქართული ასოები' handleChange={changeHandler} />
                </div>

                <div className='box-of-add'>
                    <div className='user-photo'>პირადი ფოტოს ატვირთვა</div>
                    <button className='add'>
                        <label className='add-text'>ატვირთვა
                            <input className='file-upload' name="file" type="file" onChange={changeHandler} />
                        </label>
                    </button>
                </div>
                
                <div className={`margin-input ${formDataInfo.aboutme ? 'green-border' : ''}`}>
                    <label className='header'>ჩემ შესახებ (არასავალდებულო)</label>
                    <textarea className='aboutme-input' name='aboutme' value={formDataInfo.aboutme} onChange={changeHandler}></textarea>
                </div>

                <Input type={'max'} name='email' label='ელ.ფოსტა' value={formDataInfo.email} formData={errors.email}
                    validText='უნდა მთავრდებოდეს @redberry.ge-ით' handleChange={changeHandler} />

                <Input type={'max'} name='number' label='მობილურის ნომერი' value={formDataInfo.number} formData={errors.number}
                    validText='უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს' handleChange={changeHandler} />

                
            </div>
        </div>
    );
}

export default Private;