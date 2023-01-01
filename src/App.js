
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
