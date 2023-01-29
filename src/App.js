
//TypeWriter Effect in React js . . . . its not hard to done. .
import "./styles.css";
import react from 'react';
import Typewriter from 'typewriter-effect';
export default function App() {
  return (
      <div className="App">  
      <h1>Hi I'm</h1>{' '}
      <span style={{color:"red",fontSize:"5vmin",marginBottom:"20px",fontWeight:"bold"}}>
        <Typewriter
       options={{
         autoStart:true,
         loop:true,
         delay:40,
         strings:[
           "Karthikeyan V V .",
           "Full Stack Developer .",
           "Free Lancer ."
         ]
       }
       }
         Strings={[
           "KARTHIKEYAN V V",
         ]}
         

        />

      </span>
      </div>
   
  );
}


2.Parellex Effect. . . . 

///// Parellex Effect. . . . 
import react from 'react';
import {Parallax} from 'react-parallax';
const img1="https://images.pexels.com/photos/1379630/pexels-photo-1379630.jpeg?auto=compress&cs=tinysrgb&w=600";
const inlineStyle ={
  background:'#fff',
  left:'50%',
  top:'50%',
  position:'absolute',
  padding:'20px',
  transform:'translate(-50%,-50%)',
}
export default function App() {
  return (
    <div className="App">
    <Parallax bgImage={img1} strength={500}>
      <div style={{height:500}}>
 <div style={inlineStyle}>
        Learn More
      </div>

      </div>
     
      </Parallax>
      <div style={{height:'100vh'}}></div>
    </div>
  );
}

/3. Notification . . .. .toast

import "./styles.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
export default function App() {
  const[email,SetEmail]=useState("");
  const UpdateEmailValue = (e) => {
    SetEmail(e.target.value);
  };
  const notify = () =>{
    if(email=="" || !email.includes("@")){
      toast.error('Opps please enter your Email',{
        autoClose:2000,
        theme:"colored"
      });
      return;
    }
    toast.success("message sent successfully!",{
      position:"top-center",
      pauseOnFocusLoss:true,
      draggable:true,
      autoClose:2000,
      hideProgressBar:false,
   progress:undefined,
   theme:"colored"
    });
  }
  


  return (
    <div>
      <div class="p-4">
       <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={UpdateEmailValue}/>
      </FloatingLabel>
      <div class="text-center">
      <button onClick={notify} class="btn btn-success  my-4">submit</button>

      </div>
      <ToastContainer />
    </div></div>
  );
}

.............react scroll progress-bar

import React from "react";
import ProgressBar from "react-scroll-progress-bar"; //Add this line

 export default function App(){
        return (
            <div>
              <div style={{height:"10px"}}>
  <ProgressBar />
  </div>              
                  view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view working This is all you need to get the default view workingv
           <div style={{height:"6000px"}}>
           </div>
            </div>
        );
    
}
