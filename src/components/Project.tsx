import React, { useEffect, useState } from 'react'

interface ProjectType {
  title: string;
  img: string;
  stack: string[];
  stackColor: string[];
  soloOrTeam: string;
  des: string;
  linkText: string[];
  link: string[];
}


const Project = ({ title, img, soloOrTeam, stack, des, stackColor, linkText, link }: ProjectType) => {

  let [projectLoad, setProjectLoad] = useState<string>('Project');


  useEffect(() => {
    setProjectLoad('Project on')
  }, [])

  return (
    <div className={projectLoad}>
      <div className="ProjectImg">
        <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt="projectImage" />
      </div>
      <div className="ProjectText">
        <h3 className="projectTitle">{title}</h3>
        <div className="stack">
          {stack.map((item, i) => (
            <span key={i} style={{
              'backgroundColor': `${stackColor[i]}`
            }}>{item}</span>
          ))}
        </div>
        <span className='soloOrTeam'>{soloOrTeam} 프로젝트</span>
        <p className="des">{des}</p>
      </div>
      <div className="ProjectLink">
        {linkText.map((item, i) => (
          <a href={link[i]} key={i} target='_blank' rel='noopener noreferrer'>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Project