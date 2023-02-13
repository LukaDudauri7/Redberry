import { useState, useEffect } from 'react';
import './Main.css'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Private from '../Private/Private';
import Experience from '../Experience/Experience';
import Resume from '../Resume/Resume';
import Education from '../Education/Education';
function Main() {
    let page;
    const [formData, setFormData] = useState(JSON.parse(window.localStorage.getItem("formData")) || {
        firstName: null,
        surname: null,
        aboutme: null,
        email: null,
        number: null,
        position: null,
        employer: null,
        startdate: null,
        enddate: null,
        description: null,
        school: null,
        degree: null,
        edudescription: null,
        schooldate: null,
        file: null
    });

    const [error, setError] = useState({
        firstName: '',
        surname: '',
        aboutme: '',
        email: '',
        number: '',
        position: '',
        employer: '',
        school: '',
        degree: '',
        description: '',
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData])

    // const submitForm = () => {
    //     // const formData = new FormData();
    //     // formData.append("file", selectedFile);

    //     // axios
    //     //   .post(UPLOAD_URL, formData)
    //     //   .then((res) => {
    //     //     alert("File Upload success");
    //     //   })
    //     //   .catch((err) => alert("File Upload Error"));
    // };

    const [pageNum, setpageNum] = useState(0);
    const isEmpty = (object) => {
        console.log(object)
        for( var props in object){
            if(object[props] == 'error')
                return false
        }
        return true
    }
    const pageNumNext = () => {
        console.log(isEmpty(error))
        if(isEmpty(error)){
            setpageNum(pageNum + 1);
        }
    }
    const pageNumBefore = () => {
        setpageNum(pageNum - 1);
    }
    const generateResume = () => {
        
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
                    firstName={formData.firstName ? formData.firstName : ''}
                    surname={formData.surname ? formData.surname : ''}
                    cvemail={formData.email ? formData.email : ''}
                    mobilenumber={formData.number ? formData.number : ''}
                    cvaboutme={formData.aboutme ? formData.aboutme : ''}
                    position={formData.position ? formData.position : ''}
                    employer={formData.employer ? formData.employer : ''}
                    startdate={formData.startdate ? formData.startdate : ''}
                    enddate={formData.enddate ? formData.enddate : ''}
                    description={formData.description ? formData.description : ''}
                    school={formData.school ? formData.school : ''}
                    degree={formData.degree ? formData.degree : ''}
                    schooldate={formData.schooldate ? formData.schooldate : ''}
                    edudescription={formData.edudescription ? formData.edudescription : ''}
                    file={formData.file ? formData.file : ''}
                />
            </div>
        </div>
    );
}

export default Main;

