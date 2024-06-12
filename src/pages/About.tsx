import React from 'react'
import { Props } from '../App'

const About = ({ scrollPosition }: Props) => {

  let about: HTMLDivElement | null = document.querySelector('.About');
  let aboutTop = about?.offsetTop;









  return (
    <div id='About' className={
      aboutTop ?
        (scrollPosition >= aboutTop - 300 ? 'About on' : 'About') : 'About'
    }>
      <div className="inner AboutInner">
        <div className="aboutLeft">
          <img className='profile' src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="profile" />
          <div className="aboutTitle">
            <span>01</span>
            <h2>about me</h2>
          </div>
          <p className='aboutContent'>
            안녕하세요. 웹 개발자가 되고 싶은 <span>이규남</span>입니다.<br />
            현재에 안주하지않고 끝없이 공부하며 발전하고자 합니다.<br />
            프론트엔드 개발자부터 시작해 풀스택 개발자까지 나아가고싶습니다.
          </p>
        </div>
        <div className="aboutRight">
          <div className="certificate">
            <h3>Certificate</h3>
            <p>-2024.04 웹디자인기능사</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>
              그린컴퓨터아트학원 수료
              <span>-2024.04 React, 프론트엔드개발자 양성과정</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About