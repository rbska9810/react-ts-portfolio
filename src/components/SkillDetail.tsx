import React, { useEffect, useState } from 'react'
import { skillObjType } from '../pages/Skill'

const SkillDetail = ({ title, persent, scrollPosition }: skillObjType) => {
  let [skillScroll, setSkillScroll] = useState<number>(0)
  const skill: HTMLDivElement | null = document.querySelector('.Skill')
  let skillTop = skill?.offsetTop
  const bodyWidth = document.documentElement.offsetWidth;

  const gauge = () => {
    let persentPlus = setInterval(() => {
      if (skillScroll > persent) {
        clearInterval(persentPlus)
      } else {
        setSkillScroll(skillScroll++)
      }
    }, 10);
  }
  useEffect(() => {
    if (scrollPosition !== undefined && skillTop !== undefined) {
      if (scrollPosition > skillTop-100) {
        gauge();
      }
    }
  }, [scrollPosition])
  
  return (
    <div className='SkillDetail'>
      <h4 className='skillName'>{title}</h4>
      <div className="skillGauge">
        <div className="bar" style={
          bodyWidth >= 1024 ?
          { width: `${skillScroll}%`} :
          { width: `${persent}%`}
          }></div>
        <span>{bodyWidth >= 1024 ? skillScroll : persent}%</span>
      </div>
    </div>
  )
}

export default SkillDetail