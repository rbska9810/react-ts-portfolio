import React from 'react'
import SkillDetail from '../components/SkillDetail'
import { Props } from '../App'

export interface skillObjType {
  title: string,
  persent: number,
  scrollPosition?: number
  key?: number
}

const Skill = ({ scrollPosition }: Props) => {
  let skillObj = {
    title: [
      'HTML5', 'CSS3', 'SCSS', 'JavaScript', 'jQuery', 'TypeScript', 'React', 'Figma', 'Github'
    ],
    persent: [
      90, 90, 80, 80, 40, 50, 60, 60, 50
    ]
  }






  return (
    <div className='Skill' id='Skill'>
      <div className="inner SkillInner">
        <div className="skillTitle">
          <span>02</span>
          <h2>skill</h2>
        </div>
        <div className="skillContent">
          {skillObj.title.map((item: string, i: number) => (
            <SkillDetail key={i} title={skillObj.title[i]} persent={skillObj.persent[i]} scrollPosition={scrollPosition} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill