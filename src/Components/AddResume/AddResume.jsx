import './AddResume.css'
import {Link} from "react-router-dom";
function AddResume(){
    return(
        <div className='background-image'>
            <div className='logo'></div>
            <div className="line"></div>
            <div className='box-of-resume'>
                <Link to={{pathname: 'Main'}}
                style={{textDecoration:'none'}}>
                    <div className="resume">
                        <div className="add-resume">რეზიუმეს დამატება</div>
                    </div>
                </Link>
                <div className="agency-logo"></div>     
            </div>
        </div>
    )
}

export default AddResume;