
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

