import logo from './logo.svg';

import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import gif from './anim.gif'
import mario from './mario.gif'
import background from './background.png'
import bigCloud from './WMV.gif'
import cloud from './cloud.gif';
import marioRun from './mariorun.gif'
import { useEffect, useRef, useState } from 'react';
function App() {
  var [background,setBackground]=useState({})
  const [Val, setVal] = useState(false);
  const inputIE = useRef()
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-100%)' },
      { transform: 'translateX(700%)' }
    ],
    timing: {
      duration: 5000,
      iterations:Infinity,
      playbackRate:1
    }
  })
var play = () => {
    setBackground(background = document.getElementById('background').animate([
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    {
      duration:3000,
      iterations:Infinity,
      playbackRate:-2
    } ))
    background.currentTime= background.effect.getComputedTiming().duration/2;
    
    setVal(true);
 if(Val){

   getAnimation().play()
   
 }

}
   const fast=()=>{
     if(Val){
       background.updatePlaybackRate(background.playbackRate *=1.5)
       getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.9)    
         setInterval(function () {
           if (getAnimation().playbackRate > .4) {
             getAnimation().updatePlaybackRate(getAnimation().playbackRate * .8)
             background.updatePlaybackRate(background.playbackRate *= .9)

           }
         }, 3000);
     }
     
   }
  const start=()=>{
    play()

  }
          const gamePause = () => {
            setVal(false);
            
            
          }
      
  return (
    <div>
       {!Val ? (
        <div className='start' style={{ width: '100%', height: '1000px' }} >
          <button onClick={start} style={{width:'200px',height:'140',color:'white',fontSize:'30px'}} className='start'>Start</button>

        </div>
      ) : (
        null
        )}
        {Val?<button className='pause' onClick={() => gamePause()}>Pause</button>:null}
      <div className='sky'  style={{ width:'100%',height:'840px',backgroundColor:'blue',position: 'absolute' }} onClick={fast}/>
      <img src='https://www.pngjoy.com/pngm/164/3284226_8-bit-mario-mario-ground-block-transparent-transparent.png' style={{marginTop:'830px',position:'absolute',zIndex:'4444',width: '100%', height: '100px', }} />

        <div className='background' id='background' style={{width:'100%'}}onClick={fast}>
        <img className='cloud' style={{ left: '1300px', top: '200px' }} src={cloud} width='300px' />
        <img className='cloud' style={{ left: '600px', top: '50px' }} src={cloud} width='300px' />
        <img className='cloud' style={{ left: '900px', top: '100px' }} src={cloud} width='300px' />
      <img className='cloud'  style={{ left: '1500px', top: '40px' }} src={cloud} width='300px' />
      <img className='cloud' style={{ left: '100px', top: '90px' }} src={cloud} width='300px' />
      <img className='cloud'  style={{ left: '400px', top: '300px' }} src={cloud} width='300px' />
      
        
      
      </div>
      {!Val ? <img className='box' ref={ref} src={mario} width='250px' />:null}
      {!Val ? <img className='box' ref={ref} src={mario} width='1px' /> : <img className='box' src={marioRun} ref={ref} width='250px' />} 
     
  

    </div>
  );
}

export default App;
