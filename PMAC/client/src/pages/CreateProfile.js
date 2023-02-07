import React from 'react'
import '../styles/CreateProfile.css';
import Navbar from '../components/layout/Navbar';

const CreateProfile = () => {
  return (
    <div className="App">
      <header className="App-header">
        

        Applicant Information<br></br>
        
          <form className ="app-from">
              <p>
              First Name<br></br>  
                <input type="text" name="fname" size="50"/><br></br>
              </p> 

              <p> 
              Last Name<br></br> 
                <input type="text" name="lname" size="50"/>
              </p>

              <p>
              Middle Name<br></br> 
                <input type="text" name ="mname" size="50"/>
              </p> 

              <p>
              ULM CWID#<br></br> 
                <input type="text" name ="cwid#" size="50"/>
              </p>

              <p>
              Cell Phone <br></br> 1+
              <input type="text" name ="num1" size="3"/>-
              <input type="text" name ="num2" size="3"/>-
              <input type="text" name ="num3" size="4"/>
              </p>

              <p>
              ULM Email Address<br></br> 
                <input type="text" name ="ulmEmailAdd" size="50"/>
              </p>

              <p>
              Alternative Email Address<br></br> 
                <input type="text" name ="altEmail" size="50"/>
              </p>
          </form>
              


              
          <form className="app-right">
              
              <p>
              Date<br></br>
                <input type="text" name ="month" size="3" value="Month"/>/
                <input type="text" name ="day" size="2" value="Day"/>/
                <input type="text" name ="year" size="4" value="Year"/>
              </p> 
              <p> 
              Major(s)<br></br> 
                <input type="text" name="major" size="50"/>
              </p>
              <p>
              Minor(s)<br></br> 
                <input type="text" name ="minor" size="50"/>
              </p>
              <p>
              Expected ULM Graduation Date<br></br>
                <input type="text" name ="month" size="3" value="Month"/>/
                <input type="text" name ="day" size="2" value="Day"/>/
                <input type="text" name ="year" size="4" value="Year"/>
              </p>
              <p>
              Overall Colligate GPA<br></br> 
                <input type="text" name ="gpa" size="50"/>
              </p>
          </form> 
          <br></br>
          *****************************
          <form className='app-from'>
              <p>
              Proposed Professional School Entrance Date<br></br>
                <input type="text" name ="month" size="3" value="Month"/>/
                <input type="text" name ="day" size="2" value="Day"/>/
                <input type="text" name ="year" size="4" value="Year"/>
              </p>

            <br></br>
              Score of your most recent professional entry exam:
              <p>
              MCAT :
                <input type="text" name ="MCAT" size="5"/>
              </p>
              <p>
              DAT :
                <input type="text" name ="DAT" size="8"/>
              </p>
              <p>
              OAT :
              <input type="text" name ="OAT" size="8"/>
              </p>
              <p>
              GRE :
              <input type="text" name ="GRE" size="8"/>
              </p>
          </form>
          <br></br>
          *****************************
          <form className ="app-from">
            <p>
            Date of exam taken or expected date of exam<br></br>
              <input type="text" name ="month" size="3" value="Month"/>/
              <input type="text" name ="day" size="2" value="Day"/>/
              <input type="text" name ="year" size="4" value="Year"/>
            </p>
            <p>
            Type of School Application will be sent <br></br>
              <input type="text" name ="year" size="50"/> <br></br>
            Note: Depending on the type of application, please fill in the appropriate ID numbers.
            </p>
          </form>
          <div>
            <form className ="app-from">
              <p>
              AMCAS Letter ID<br></br> 
                <input type="text" name ="AMCASld" size="50"/>
              </p>
              <p>
              AACOMAS CAS #<br></br> 
                <input type="text" name ="AACOMAS" size="50"/>
              </p>
              <p>
              AADSAS ID #:<br></br> 
                <input type="text" name ="AADSAS" size="50"/>
              </p>
            </form>


            <form className ="app-right">
              <p>
              AAMC ID<br></br> 
                <input type="text" name ="AAMCld" size="50"/>
              </p>
              <p>
              CASPA CAS #<br></br> 
                <input type="text" name ="CASPA" size="50"/>
              </p>      
            </form>
          </div>
          <br></br>
          *****************************
          <form className="app-from">
            <p>
              Faculty Member(s) Submitting Evaluations on your Behalf:<br></br>
              <input type="text" name ="name" size="30" value="Name"/>/
              <input type="text" name ="title" size="30" value="Title"/>/
              <input type="text" name ="department" size="30" value="Department"/>
            </p>
            <br></br>
            <p>
              <input type="text" name ="name" size="30" value="Name"/>/
              <input type="text" name ="title" size="30" value="Title"/>/
              <input type="text" name ="department" size="30" value="Department"/>
            </p>  
            <br></br>
            <p>
              <input type="text" name ="name" size="30" value="Name"/>/
              <input type="text" name ="title" size="30" value="Title"/>/
              <input type="text" name ="department" size="30" value="Department"/>
            </p>  
            <br></br>
          </form>
          <br></br>
          *****************************
          <br></br>
          <form className="app-right">
              <input type="submit" name="submit"/>  
              <input type="reset"/>
          </form> 
      </header>
    </div>
  )
}

export default CreateProfile
