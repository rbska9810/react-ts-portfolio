import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const goToTop = ()=>{
    window.scrollTo({
			top: 0,
		});
  }
  

  return (
    <div className='Header'>
      <Link to={'/'} onClick={goToTop}>HOME</Link>
      <Link to={'/projects'} onClick={goToTop}>PROJECTS</Link>
      <Link to={'/clone-coding'} onClick={goToTop}>CLONE-CODING</Link>
    </div>
  )
}

export default Header