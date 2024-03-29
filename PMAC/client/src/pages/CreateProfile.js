import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {createProfile} from '../actions/profile';
import propTypes from 'prop-types';
import s from '../styles/ApplicantInformation.module.css';
//styles



const CreateProfile = ({createProfile, isAuthenticated}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fname:"",
        lname:"",
        mname:"",
        cwid:"",
        cell:"",
        address:"",
        ulm_email:"",
        alt_email:"",
        bdate:"",
        major:"",
        minor:"",
        grad_date:"",
        gpa:"",
        entrance_date:"",
        mcat:"",
        dat:"",
        oat:"",
        gre:"",
        scoreBreakdown: '',
        exam_date:"",
        amcas_id:"",
        aacomas_id:"",
        aadsas_id:"",
        aamc_id:"",
        caspa_id:"",
        falcultyEval: ''

  });


  const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value});

  const onSubmit = async (e) =>{
    e.preventDefault();
    createProfile(formData);
    setIsSubmitted(true);
  }

  if(isSubmitted){
  return <Navigate to ="/dashboardStudent" />
  }

 


  return (
    <>
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (

    <body className={s.body}>

    <div className={s.subTitle}>Applicant Information</div>

    <form onSubmit={e => onSubmit(e)} className={s.form}>

      

      <div>

      <div>
        <label htmlFor="fname">First Name: <br></br></label>
        <input
          type="text"
          id="fname"
          name="fname"
          size = "50"
          value={formData.fname}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="mname">Middle Name: <br></br></label>
        <input
          type="text"
          id="mname"
          name="mname"
          size = "50"
          value={formData.mname}
          onChange={e=> onChange(e)}
          />
      </div>
      

      <div>
        <label htmlFor="lname">Last Name: <br></br></label>
        <input
          type="text"
          id="lname"
          name="lname"
          size = "50"
          value={formData.lname}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="cwid">ULM CWID #: <br></br></label>
        <input
          type="text"
          id="cwid"
          name="cwid"
          size = "50"
          value={formData.cwid}
          onChange={e=> onChange(e)}
          />
      </div>
      

      <div>
        <label htmlFor="address">Local Address: <br></br></label>
        <input
          type="text"
          id="address"
          name="address"
          size = "50"
          value={formData.address}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="phone">Phone: <br></br></label>
        <input
          type="text"
          id="phone"
          name="cell"
          size = "50"
          value={formData.cell}
          onChange={e=> onChange(e)}
          required/>
      </div>
      </div>

      <div>

      <div>
        <label htmlFor="email">ULM Email: <br></br></label>
        <input
          type="text"
          id="email"
          name="ulm_email"
          size = "50"
          value={formData.ulm_email}
          onChange={e=> onChange(e)}
        />
      </div>  
      

      <div>
        <label htmlFor="altEmail">Alternate Email: <br></br></label>
        <input
          type="text"
          id="altEmail"
          name="alt_email"
          size = "50"
          value={formData.alt_email}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="majors">Major(s): <br></br></label>
        <input
          type="text"
          id="majors"
          name="major"
          size = "50"
          value={formData.major}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="minors">Minor(s): <br></br></label>
        <input
          type="text"
          id="minors"
          name="minor"
          size = "50"
          value={formData.minor}
          onChange={e=> onChange(e)}
          />
      </div>
      

      <div>
        <label htmlFor="expGraduation">Date of Expected Graduation from ULM: <br></br></label>
        <input
          type="date"
          id="expGraduation"
          name="grad_date"
          size = "50"
          value={formData.grad_date}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="gpa">Overall Collegiate GPA: <br></br></label>
        <input
          type="text"
          id="gpa"
          name="gpa"
          size = "50"
          value={formData.gpa}
          onChange={e=> onChange(e)}
          required/>
      </div>
      
      </div>
    <div>
    </div>
    
    
    <div>
      <div>
          <label htmlFor="profSchoolDate">Date of Proposed Entrance to Professional School: <br></br></label>
          <input
            type="date"
            id="profSchoolDate"
            name="entrance_date"
            size = "50"
            value={formData.entrance_date}
            onChange={e=> onChange(e)}
            required/>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div>
          <label htmlFor="MCAT">MCAT: <br></br></label>
          <input
            type="text"
            id="MCAT"
            name="mcat"
            size = "25"
            value={formData.mcat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div>
          <label htmlFor="DAT">DAT: <br></br></label>
          <input
            type="text"
            id="DAT"
            name="dat"
            size = "25"
            value={formData.dat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div>
          <label htmlFor="OAT">OAT: <br></br></label>
          <input
            type="text"
            id="OAT"
            name="oat"
            size = "25"
            value={formData.oat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div>
          <label htmlFor="GRE">GRE: <br></br></label>
          <input
            type="text"
            id="GRE"
            name="gre"
            size = "25"
            value={formData.gre}
            onChange={e=> onChange(e)}
            />
      </div>
      
    </div>

  <div>
      <div>
          <label htmlFor="scoreBreakdown">Please include your breakdown scores: <br></br></label>
          <textarea
            style={{
              width: "100%",
              height: "100%",
              resize: "none"}}
            type="text"
            id="scoreBreakdown"
            name="scoreBreakdown"
            size = "500"
            value={formData.scoreBreakdown}
            onChange={e=> onChange(e)}

            />
      </div>
  </div>
    
    
    <div>  

      <div>
        <label htmlFor="examDate">Date of exam taken or expected date of exam: <br></br></label>
        <input
          type="date"
          id="examDate"
          name="exam_date"
          size = "50"
          value={formData.exam_date}
          onChange={e=> onChange(e)}
          required/>
      </div>
      

      <div>
        <label htmlFor="schoolType">Type of School Application will be sent: <br></br></label>
        <input
          type="text"
          id="schoolType"
          name="schoolType"
          size = "50"
          value={formData.schoolType}
          onChange={e=> onChange(e)}
          required/>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <span>Note: Depending on the type of application, please fill in the appropriate ID numbers.</span>

      <div>
        <label htmlFor="amca">AMCAS Letter ID:<br></br></label>
        <input
          type="text"
          id="amca"
          name="amcas_id"
          size = "25"
          value={formData.amcas_id}
          onChange={e=> onChange(e)}
          /> 
      </div>
        


        <div>
          <label htmlFor="aamc">AAMC ID:<br></br></label>
          <input
            type="text"
            id="aamc"
            name="aamc_id"
            size = "25"
            value={formData.aamc_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        

    </div>


    <div>
        <div>
          <label htmlFor="aacomas">AACOMAS CAS #:<br></br></label>  
          <input
            type="text"
            id="aacomas"
            name="aacomas_id"
            size = "25"
            value={formData.aacomas_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        

        <div>
          <label htmlFor="caspa">CASPA CAS #:<br></br></label>  
          <input
            type="text"
            id="caspa"
            name="caspa_id"
            size = "25"
            value={formData.caspa_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        

        <div>
          <label htmlFor="aadsas">AADSAS ID #:<br></br></label> 
          <input
            type="text"
            id="aadsas"
            name="aadsas_id"
            size = "25"
            value={formData.aadsas_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
      </div>
      
    
    <br></br>
    <span>Faculty Members Submitting Evaluations on your Behalf: </span>

      <div>
        <label htmlFor="falcultyEval">Name / Title/ Department<br></br></label> 
        <textarea
          type="text"
          id="falcultyEval"
          name="falcultyEval"
          size = "500"
          value={formData.falcultyEval}
          onChange={e=> onChange(e)}
          /> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className='app-submit'>
        <button type="submit" style={{ fontSize: 20, width: 150, height: 50 }}>
          Submit
        </button>
      </div>

    </form>
    </body>
    )}
    </>
  );  
};

CreateProfile.propTypes ={
  setAlert: propTypes.func.isRequired,
  createProfile:propTypes.func.isRequired,
  isAuthenticated: propTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, createProfile})(CreateProfile);
