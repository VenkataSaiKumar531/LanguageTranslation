import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './App.css';



const YourForm=({direction})=> {

    console.log("Received PROPS are",direction);


  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log("data That we got from the FORM is",data);
  }; // your form submit function which will invoke after successful validation

 // you can watch individual input by pass the name of the input

  return (
      <div  className="container">

<div className="card">
  <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)} >
                                      
                                     <label> First Name: </label> <input  dir={direction} {...register("FirstName",{required:true})} />
                                      <br/>                              
                                     <label> Last Name: </label> <input dir={direction} {...register(" LastName", { required: true })} />
                                      {errors.exampleRequired && <span>This field is required</span>}
                                      <br/>
                                      <label>Please agree Tersm and Conditions</label>
                                      <input type="checkbox" value="chekboxvalue" {...register("checkbox",{required: true})}/>
                                      <br/>
                                      <label>Add attachments</label><input type="file" {...register("attachment",{required:true})}/>
                                      <br/>
                                      <input type="submit" />
                                      <br/>
                     </form>

    </div>


</div>


    </div>

    
  );
}

export default YourForm;





