import React from 'react'
import IntroBg from '../components/IntroBg'
import {Props} from '../App'

const Intro = ({scrollPosition}:Props) => {
  return (
    <div className='Intro'>
      <IntroBg scrollPosition={scrollPosition}/>
      <div className="introCenter">
        <h1>lee gyu nam</h1>
        <p>PortFolio</p>
      </div>
    </div>
  )
}

export default Intro