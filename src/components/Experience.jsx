import React from 'react'
import { experiences } from '../data/Experiences.js'

const container = 'text-gray-100 py-20 px-10';
const wrapper = 'flex flex-col justify-center items-center gap-6';
const title = 'text-4xl font-bold text-amber-500';
const subTitle = 'text-2xl text-center';
const expContainer = 'flex flex-col gap-7 md:w-2/3'
const expWrapper = 'bg-gray-950 flex flex-col gap-4 py-10 px-7 rounded-lg border border-lime-800 hover:border-lime-600 duration-500'
const companyWrapper = 'flex gap-3'
const companyImgStyle = 'rounded-xl'
const roleNameDateWrapper = 'flex flex-col gap-1'
const roleStyle = 'text-amber-600 text-2xl font-semibold'
const companyName = 'text-gray-300 text-lg'
const dateStyle = 'text-gray-400 text-sm'
const skillContainer = 'flex gap-5'
const skillTitle = 'text-amber-600 text-lg'
const skillWrapper = 'flex flex-1 flex-wrap gap-1 list-none'
const skillStyle = 'mx-3 text-gray-400'

function Experience() {
  return (
    <div name='experience' className={container}>
      <div className={wrapper}>
        <div className={title}>Experience</div>
        <div className={subTitle}>My Work Experience as a Software Developer</div>
        <div className={expContainer}>
          {
            experiences.map((item, index) => {
              return (
                <div key={index} className={expWrapper}>
                  <div className={companyWrapper}>
                    <div>
                      <img
                        className={companyImgStyle}
                        height={'80px'}
                        width={'80px'}
                        src={item.img}
                        alt="companyLogo"
                      />
                    </div>
                    <div className={roleNameDateWrapper}>
                      <div className={roleStyle}>{item.role}</div>
                      <div className={companyName}> {item.company} </div>
                      <div className={dateStyle}> {item.date} </div>
                    </div>
                  </div>
                  <div> {item.desc} </div>
                  <div className={skillContainer}>
                    <div className={skillTitle}>Skills :- </div>
                    <div className={skillWrapper}>
                      {
                        item.skills.map((skill, index) => {
                          return (
                            <li key={index} className={skillStyle}> {skill} </li>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Experience