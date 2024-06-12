import React from 'react'
import Intro from './Intro'
import About from './About'
import Skill from './Skill'
import { Props } from '../App'
import Loding from './Loding'


const Main = ({ scrollPosition }: Props) => {
  return (
    <div className='Main'>
      <Loding />
      <Intro scrollPosition={scrollPosition} />
      <About scrollPosition={scrollPosition} />
      <Skill scrollPosition={scrollPosition} />
    </div>
  )
}

export default Main