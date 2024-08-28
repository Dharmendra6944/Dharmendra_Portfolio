import React from 'react';
import { projects } from '../data/Projects.js';

const container = ' text-gray-100 py-20 px-10';
const wrapper = 'flex flex-col justify-center items-center gap-6';
const title = 'text-4xl font-bold text-amber-500';
const subTitle = 'text-2xl text-center';
const projectContainer = 'flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto';
const projectWrapper = 'bg-gray-950 flex flex-col gap-6 py-10 px-7 rounded-lg border border-cyan-800 duration-500 shadow-md';
const imgWrapper = 'relative bg-gradient-to-l from-amber-600 to-lime-600 rounded p-px duration-500';
const projectImgStyle = 'rounded relative';
const overlayStyle = 'hidden absolute inset-0 md:flex gap-6 justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-500';
const btnStyle = 'mx-4 flex-1 bg-cyan-500 rounded-lg text-gray-950 py-3 px-3 md:px-5';
const nameDateWrapper = 'flex flex-col gap-1';
const nameStyle = 'text-amber-600 text-2xl font-semibold';
const dateStyle = 'text-gray-400 text-sm';
const skillWrapper = 'flex flex-wrap gap-2';
const skillStyle = 'px-3 py-1 text-sm text-gray-950 bg-gradient-to-l from-amber-600 to-lime-600 rounded-full';

function Projects() {
  return (
    <div name='projects' className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={subTitle}>Here are My Recent Projects defining Experience</div>
        <div className={projectContainer}>
          {projects.map((item, index) => (
            <div className={projectWrapper} key={index}>
              <div className={imgWrapper}>
                <img className={projectImgStyle} src={item.img} alt="" />
                <div className={overlayStyle}>

                  <button className={btnStyle}>
                    <a href={item.live} target='_blank' rel='noopener noreferrer'>Live</a>
                  </button>
                  <button className={btnStyle}>
                    <a href={item.github} target='_blank' rel='noopener noreferrer' className='text-nowrap'>Github </a>
                  </button>
                </div>

              </div>
              <div className={skillWrapper}>
                {item.skills.map((skill, index) => (
                  <div className={skillStyle} key={index}>{skill}</div>
                ))}
              </div>
              <div className={nameDateWrapper}>
                <div className={nameStyle}>{item.title}</div>
                <div className={dateStyle}>{item.date}</div>
              </div>
              <div>{item.desc}</div>
              <div className='flex justify-between items-center md:hidden'>

                <button className={btnStyle}>
                  <a href={item.live} target='_blank' rel='noopener noreferrer'>Live</a>
                </button>
                <button className={btnStyle}>
                  <a href={item.github} target='_blank' rel='noopener noreferrer' className='text-nowrap'>Github </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
