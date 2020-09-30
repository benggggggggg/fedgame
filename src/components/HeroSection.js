import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';




function HeroSection() {
  const [currentTime,setCurrentTime] = useState(1);
  useEffect(()=>{
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      })
    },[]);
    
  return (
    <div className='hero-container'>
      /*<video src='/videos/video-1.mp4' autoPlay loop muted />*/
      <h1>FedGame</h1>
      <p>A Multi-player Game for Studying Federated Machine Learning Incentive Schemes</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <Link to='/play'>
          PLAY
          </Link>
        </Button>
         <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          /*onClick={console.log('hey')}*/
        >
        <Link to='/video'>
          WATCH VIDEO <i className='far fa-play-circle' />
          </Link>
        </Button>
          <p>the current time is {currentTime}.</p>
      </div>
    </div>
  );
}

export default HeroSection;
