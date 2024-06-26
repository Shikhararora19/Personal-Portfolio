import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
  )


const renderContent = {
    1: (
        <h1 className='sm-text xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white  mx-5'>
            Hi, I am <span className='font-semibold'>Shikhar</span> 👋
            <br></br>

            A Computer Science Student at University of Alberta
            <br></br>
            Drag/use keyboard arrows to explore

        </h1>     
    ),
    2:(
       <InfoBox 
        text='Worked on many projects and developed many skills'
        link='/about'
        btnText='Learn More'
       />
    ),
    3:(
        <InfoBox 
        text='Projects I have worked on'
        link='/projects'
        btnText='Visit my portfolio'
       />
    ),
    4:(
        <InfoBox 
        text='Looking for a dev? I am just a few keystrokes away'
        link='/contact'
        btnText='Contact'
       />
    )

  }

  


const HomeInfo = ({currentStage}) => {
  

  return renderContent[currentStage] || null;
}

export default HomeInfo