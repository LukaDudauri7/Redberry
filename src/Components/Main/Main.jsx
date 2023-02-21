import { useState, useEffect } from 'react';
import './Main.css'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Private from '../Private/Private';
import Experience from '../Experience/Experience';
import Resume from '../Resume/Resume';
import Education from '../Education/Education';
import axios from 'axios';
function Main() {
    let page;
    const [formData, setFormData] = useState(JSON.parse(window.localStorage.getItem("formData")) || {
        name: null,
        surname: null,
        about_me: null,
        email: null,
        phone_number: null,
        schooldate: null,
        image: null,
        experiences : [
            {
                position: null,
                employer: null,
                start_date: null,
                due_date: null,
                description: null,
            }
        ],
        educations : [
            {
                institute: null,
                degree: null,
                degree_id: 7,
                due_date: null,
                description: null,
            }
        ]
    });

    const [error, setError] = useState({
        name: '',
        surname: '',
        about_me: '',
        email: '',
        phone_number: '',
        position: '',
        employer: '',
        school: '',
        degree: '',
        description: '',
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData])

    const [pageNum, setpageNum] = useState(0);
    const isEmpty = (object) => {
        for (var props in object) {
            if (object[props] == 'error')
                return false
        }
        return true
    }
    const pageNumNext = () => {
        if (isEmpty(error)) {
            setpageNum(pageNum + 1);
        }
    }
    const pageNumBefore = () => {
        setpageNum(pageNum - 1);
    }
    const generateResume = () => { 
        console.log(formData)
        axios.post('https://resume.redberryinternship.ge/api/cvs', {...formData} )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    switch (pageNum) {
        case 0:
            page = <Private formDataInfo={formData} formDataSet={setFormData} errors={error} setErrors={setError} />;
            break;
        case 1:
            page =
                <div>
                    <div className="center-side">
                        <div className='info-box'>
                            <div className='Private-Info'>გამოცდილება</div>
                            <div className='page-num'>2/3</div>
                        </div>
                        <div className='info-line'></div>
                        <Experience formDataInfo={formData} formDataSet={setFormData} errors={error} setErrors={setError} />
                        <div className='box-of-addmore'>
                            <div className='addmore' >მეტი გამოცდილების დამატება</div>
                        </div>
                    </div>
                </div>
            break;
        case 2:
            page = <Education formDataInfo={formData} formDataSet={setFormData} errors={error} setErrors={setError} />;
            break;
    }

    return (
        <div className='container'>
            <div className='side'>
                <div className='left-arrow-side'>
                    <Link to='/' className='left-arrow' onClick={() => { localStorage.clear() }} ></Link>
                </div>
                {page}
                {pageNum > 0 && <div onClick={pageNumBefore} className='box-of-back'>
                    <div className='back'>უკან</div>
                </div>}
                {pageNum < 2 && <div onClick={pageNumNext} className='box-of-next'>
                    <div className='next'>შემდეგი</div>
                </div>}
                {pageNum == 2 && <div onClick={generateResume} className='box-of-next'>
                    <div className='next'>დასრულება</div>
                </div>}
            </div>
            <div className='cv'>
                <Resume
                    name={formData.name ? formData.name : ''}
                    surname={formData.surname ? formData.surname : ''}
                    cvemail={formData.email ? formData.email : ''}
                    phone_number={formData.phone_number ? formData.phone_number : ''}
                    about_me={formData.about_me ? formData.about_me : ''}
                    position={formData.position ? formData.position : ''}
                    employer={formData.employer ? formData.employer : ''}
                    startdate={formData.experiences[0].start_date ? formData.experiences[0].start_date : ''}
                    enddate={formData.experiences[0].due_date ? formData.experiences[0].due_date : ''}
                    description={formData.experiences[0].description ? formData.experiences[0].description : ''}
                    school={formData.educations[0].school ? formData.educations[0].school : ''}
                    degree={formData.educations[0].degree ? formData.educations[0].degree : ''}
                    schooldate={formData.schooldate ? formData.schooldate : ''}
                    edudescription={formData.educations[0].description ? formData.educations[0].description : ''}
                    image={formData.image ? formData.image : ''}
                />
            </div>
        </div>
    );
}

export default Main;

