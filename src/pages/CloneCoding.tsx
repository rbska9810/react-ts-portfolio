import React from 'react'
import Clone from '../components/Clone'

const CloneCoding = () => {

  const clone = {
    title: [
      'Ralph Lauren',
      'Mardi Mecredi',
      'Good Meat',
      'Home Check',
      'Class101'
    ],
    img: [
      'clone01.png',
      'clone02.png',
      'clone03.png',
      'clone04.png',
      'clone05.png',
    ],
    stack: [
      ['#React', '#JavaScript'],
      ['#React', '#JavaScript'],
      ['#HTML', '#SCSS', '#JavaScript'],
      ['#HTML', '#CSS', '#JavaScript'],
      ['#HTML', '#SCSS', '#JQuery'],
    ],
    gitHub:[
      'https://github.com/rbska9810/react-project-ralphLauren.git',
      'https://github.com/rbska9810/react-project-mardi.git',
      'https://github.com/rbska9810/all-in-one-web.git',
      'https://github.com/rbska9810/sideProject-homecheck.git',
      'https://github.com/rbska9810/sideProject-class101.git'
    ],
    demo:[
      'https://main--ralphlauren-rbska9810.netlify.app/',
      'https://main--react-mardi-rbska9810.netlify.app/',
      'https://rbska9810.github.io/all-in-one-web/',
      'https://rbska9810.github.io/sideProject-homecheck/',
      'https://rbska9810.github.io/sideProject-class101/'
    ]
  }






  return (
    <div className='CloneCoding'>
      <div className="inner cloneCodingInner">
      <div className="cloneTitle">
          <span>04</span>
          <h2>Clone-Coding</h2>
        </div>
        <div className="cloneWrap">
          {
            clone.title.map((item, i: number) => (
              <Clone key={i} title={clone.title[i]} img={clone.img[i]} stack={clone.stack[i]} gitHub={clone.gitHub[i]} demo={clone.demo[i]} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CloneCoding