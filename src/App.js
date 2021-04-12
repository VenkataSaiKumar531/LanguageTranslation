import React,{useState} from 'react';
import './App.css';
import './myStyles.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import YourForm from './YourForm'

function App() {

  const [direction, setIdirection]=useState("ltr");
  const { t } = useTranslation();
 

  const handleChange=(e)=>{

    console.log("Selected Language is", e.target.value)
    if(e.target.value!=="ar")
    {
      setIdirection("ltr")
    }
    else{
      setIdirection("rtl")
    }
  
    i18next.changeLanguage(e.target.value)
  }

  const bootstrapDropdown =()=>{
    console.log("**");
  }
  return (
    
    <div className="App">

         <select className="dropdown" onChange={handleChange} className="right-align">
                <option  value="en">English</option>
                <option  value="ko">Korean</option>
                <option  value="chi">Chinese</option>
                <option  value="ar">Arabic</option>
                <option  value="ru">Rusian</option>
          </select>
          

           <h2>{t('Thanks.1')} {t('Welcome.1')} {t('to.1')} {t('Cognizant.1')}</h2>
           <label>Enter Your Name</label>
        
<input type="text" dir={direction} placeholder = "Left to Right"/>
<br/>

<label>Select Place</label> <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"  dir={direction}  aria-haspopup="true" aria-expanded="false">
    --Select--
  </button>
  
  <div className="dropdown-menu dropdown-menu-right" onChange={bootstrapDropdown}>
    <button className="dropdown-item" type="button">Hyderabad</button>
    <button className="dropdown-item" type="button">Bangalore</button>
    <button className="dropdown-item" type="button">Chennai</button>
    <button className="dropdown-item" type="button">Pune</button>
  </div>
</div>


<label> {t('AndhraPradesh.1')} </label>
<select class="form-select" aria-label="Default select example" dir={direction}>
  <option selected>--Select Option--</option>
  <option value="1">Karnataka</option>
  <option value="2">Telangana</option>
  <option value="3"> {t('AndhraPradesh.1')} </option>
</select>




          

         

          <YourForm direction={direction}/>
    </div>
 

  );


}

export default App; 

