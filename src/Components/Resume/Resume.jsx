import './Resume.css'

const Resume = ({ name, surname, cvemail, mobilenumber, about_me,
    image, position, description, startdate, enddate, employer, school, edudescription, degree, schooldate }) => {
    return (
        <div className='resume-container'>
            {<div className="fullName">{name + ' ' + surname}</div>}
            {image && <img src={image} className='cv-img'></img>}
            {cvemail && <div className='cv-email-img'>
                <div className='cv-email'>{cvemail}</div>
            </div>}
            {mobilenumber && <div className='number-img'>
                <div className='number'>{mobilenumber}</div>
            </div>}
            {about_me && <div className='cv-aboutme'>ჩემ შესახებ
                <div className='cv-aboutme-text'>{about_me}</div>
            </div>}
            {position && <div className='cv-aboutme'>გამოცდილება
                <div className='experience'>{position + ", " + employer}</div>
            </div>}
            {startdate && enddate && <div className='experience-date'>{startdate + ' - ' + enddate}</div>}
            {description && <div className='cv-aboutme-text'>{description}</div>}

            {school && degree && <div className='cv-aboutme'>განათლება
                <div className='experience'>{school + ', ' + degree}</div>
            </div>}
            {schooldate && <div className='experience-date'>{schooldate}</div>}
            {edudescription && <div className='cv-aboutme-text'>{edudescription}</div>}
        </div>
    )
}

export default Resume;