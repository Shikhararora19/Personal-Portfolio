import React from 'react'
import { projects } from '../constants'
import CTA from '../components/CTA'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>My <span className='blue-gradient_text
    font-semibold drop-shadow'>Projects</span>
    </h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>Here are some of my notable projects:</p>

    </div>
    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={ `btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounde-xl flex justify-center items-center'>
              <img
              src={project.iconUrl}
              alt='Project icon'
              className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              {project.name}
            </h4>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {project.description.map((point,index) => (
                <li className='text-black-500/50 font-normal pl-1 text-sm' 
                key={`project-point-${index}`}>{point}</li>
              ))}
            </ul>
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link to={project.link}
              target='_blank'
              rel='noopener noreferrer' className='font-semibold text-blue-500'>Github Link
              </Link>
              <img src={arrow}
              alt='arrow'
              className='w-4 h-4 object-contain'></img>
            </div>

          </div>
        </div>
      ))}
    
      
    </div>
    <hr className='border-slate-200'/>
    <CTA/>
    </section>
  )
}

export default Projects