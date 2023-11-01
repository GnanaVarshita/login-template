import './App.css';
import {useState} from "react";
import FormInput from "./components/FormInput"
function App() {
  const[values,setValues]=useState({
    Username:"",
    Email:"",
    PhoneNo:"",
    Password:"",
    ConfirmPassword:""

  });

  const inputs=[
    {
      id:1,
      placeholder:"Username",
      name:"Username",
      label:"Username",
      type:"text"
    },
    {
      id:2,
      placeholder:"Email",
       name:"Email",
       label:"Email",
       type:"text"
    },
    {
      id:3,
      placeholder:"Phone No." ,
      name:"PhoneNo",
      label:"Phone No.",
      type:"text"
    },
    {
      id:4,
      placeholder:"Password", 
      name:"Password",
      label:"Password",
      type:"text"
    },
    {
      id:5,
      placeholder:"ConfirmPassword", 
      name:"ConfirmPassword",
      label:"ConfirmPassword",
      type:"text"
    }
  ]
  const handleSubmit=(e)=>{
    e.previousDefault();

  }

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
        <FormInput key={input.id}{...input} 
        value={values[input.name]} 
        onChange={onChange}/>
      ))}
      <button>Submit</button>
      </form>
    
    </div>
  );
}

export default App;
