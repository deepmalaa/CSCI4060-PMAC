import React, { useState } from 'react';
import './App.css';


const SubmitButton = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    cwid:'',
    address: '',
    phone: '',
    email: '',
    altEmail: '',
    majors: '',
    minors: '',
    expGraduation: '',
    gpa: '',
    profSchoolDate: '',
    MCAT: '',
    DAT: '',
    OAT: '',
    GRE: '',
    scoreBreakdown: '',
    examDate: '',
    schoolType: '',
    amca: '',
    aamc: '',
    aamcomas: '',
    caspa: '',
    aadsas: '',
    falcultyEval: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // send formData to the server
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        
    <form SubmitButton={handleSubmit} className='App-background'>

      <span className='App-header'>Applicant Information</span>
      
      <div className='app-left'>

      <div>
        <label htmlFor="fname">First Name: <br></br></label>
        <input
          type="text"
          id="fname"
          name="fname"
          size = "50"
          value={formData.fname}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="mname">Middle Name: <br></br></label>
        <input
          type="text"
          id="mname"
          name="mname"
          size = "50"
          value={formData.mname}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="lname">Last Name: <br></br></label>
        <input
          type="text"
          id="lname"
          name="lname"
          size = "50"
          value={formData.lname}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="cwid">ULM CWID #: <br></br></label>
        <input
          type="text"
          id="cwid"
          name="cwid"
          size = "50"
          value={formData.cwid}
          onChange={handleChange}
          />
      </div>
      <br></br>

      <div>
        <label htmlFor="address">Local Address: <br></br></label>
        <input
          type="text"
          id="address"
          name="address"
          size = "50"
          value={formData.address}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="phone">Phone: <br></br></label>
        <input
          type="text"
          id="phone"
          name="phone"
          size = "50"
          value={formData.phone}
          onChange={handleChange}
          required/>
      </div>
      </div>

      <div className='app-right'>

      <div>
        <label htmlFor="email">ULM Email: <br></br></label>
        <input
          type="text"
          id="email"
          name="email"
          size = "50"
          value={formData.email}
          onChange={handleChange}
        />
      </div>  
      <br></br>

      <div>
        <label htmlFor="altEmail">Alternate Email: <br></br></label>
        <input
          type="text"
          id="altEmail"
          name="altEmail"
          size = "50"
          value={formData.altEmail}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="majors">Major(s): <br></br></label>
        <input
          type="text"
          id="majors"
          name="majors"
          size = "50"
          value={formData.majors}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="minors">Minor(s): <br></br></label>
        <input
          type="text"
          id="minors"
          name="minors"
          size = "50"
          value={formData.minors}
          onChange={handleChange}
          />
      </div>
      <br></br>

      <div>
        <label htmlFor="expGraduation">Date of Expected Graduation from ULM: <br></br></label>
        <input
          type="text"
          id="expGraduation"
          name="expGraduation"
          size = "50"
          value={formData.expGraduation}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="gpa">Overall Collegiate GPA: <br></br></label>
        <input
          type="text"
          id="gpa"
          name="gpa"
          size = "50"
          value={formData.gpa}
          onChange={handleChange}
          required/>
      </div>
      <br></br>
      </div>
    <div>
    </div>
    <br></br>
    <p>***********************************************************************************************************************************************</p>
    <div className='app-left'>
      <div>
          <label htmlFor="profSchoolDate">Date of Proposed Entrance to Professional School: <br></br></label>
          <input
            type="text"
            id="profSchoolDate"
            name="profSchoolDate"
            size = "50"
            value={formData.profSchoolDate}
            onChange={handleChange}
            required/>
      </div>
      <br></br>

      <div>
          <label htmlFor="MCAT">MCAT: <br></br></label>
          <input
            type="text"
            id="MCAT"
            name="MCAT"
            size = "25"
            value={formData.MCAT}
            onChange={handleChange}
            />
      </div>
      <br></br>

      <div>
          <label htmlFor="DAT">DAT: <br></br></label>
          <input
            type="text"
            id="DAT"
            name="DAT"
            size = "25"
            value={formData.DAT}
            onChange={handleChange}
            />
      </div>
      <br></br>

      <div>
          <label htmlFor="OAT">OAT: <br></br></label>
          <input
            type="text"
            id="OAT"
            name="OAT"
            size = "25"
            value={formData.OAT}
            onChange={handleChange}
            />
      </div>
      <br></br>

      <div>
          <label htmlFor="GRE">GRE: <br></br></label>
          <input
            type="text"
            id="GRE"
            name="GRE"
            size = "25"
            value={formData.GRE}
            onChange={handleChange}
            />
      </div>
      <br></br>
    </div>
    
  <div className='app-right'>
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
            onChange={handleChange}
            
            />
      </div>
  </div>
    <p>***********************************************************************************************************************************************</p>
    <span className='app-note'>Note: Depending on the type of application, please fill in the appropriate ID numbers.</span>
    
    <div className='app-left'>  
      
      <div>
        <label htmlFor="examDate">Date of exam taken or expected date of exam: <br></br></label>
        <input
          type="text"
          id="examDate"
          name="examDate"
          size = "50"
          value={formData.examDate}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      <div>
        <label htmlFor="schoolType">Type of School Application will be sent: <br></br></label>
        <input
          type="text"
          id="schoolType"
          name="schoolType"
          size = "50"
          value={formData.schoolType}
          onChange={handleChange}
          required/>
      </div>
      <br></br>

      
      <div>
        <label htmlFor="amca">AMCAS Letter ID:<br></br></label>
        <input
          type="text"
          id="amca"
          name="amca"
          size = "25"
          value={formData.amca}
          onChange={handleChange}
          /> 
      </div>
        <br></br>


        <div>
          <label htmlFor="aamc">AAMC ID:<br></br></label>
          <input
            type="text"
            id="aamc"
            name="aamc"
            size = "25"
            value={formData.aamc}
            onChange={handleChange}
            /> 
        </div>
        <br></br>
    
    </div>


    <div className='app-right'>
        <div>
          <label htmlFor="aacomas">AACOMAS CAS #:<br></br></label>  
          <input
            type="text"
            id="aacomas"
            name="aacomas"
            size = "25"
            value={formData.aacomas}
            onChange={handleChange}
            /> 
        </div>
        <br></br>

        <div>
          <label htmlFor="caspa">CASPA CAS #:<br></br></label>  
          <input
            type="text"
            id="caspa"
            name="caspa"
            size = "25"
            value={formData.caspa}
            onChange={handleChange}
            /> 
        </div>
        <br></br>

        <div>
          <label htmlFor="aadsas">AADSAS ID #:<br></br></label> 
          <input
            type="text"
            id="aadsas"
            name="aadsas"
            size = "25"
            value={formData.aadsas}
            onChange={handleChange}
            /> 
        </div>
      </div>
      <br></br>
    <p>***********************************************************************************************************************************************</p>
    <br></br>
    <span className='app-note'>Faculty Members Submitting Evaluations on your Behalf: </span>
      
      <div className='app-note'>
        <label htmlFor="falcultyEval">Name / Title/ Department<br></br></label> 
        <textarea
          type="text"
          id="falcultyEval"
          name="falcultyEval"
          size = "500"
          value={formData.falcultyEval}
          onChange={handleChange}
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
    )}
    </>
  );  
};

export default SubmitButton;
