import React, { useEffect, useState } from 'react'

interface CloneType {
  title: string,
  img: string,
  stack: string[],
  gitHub: string,
  demo: string

}

const Clone = ({ title, img, stack, gitHub, demo }: CloneType) => {
  let [cloneLoad, setCloneLoad] = useState<string>('Clone')


  useEffect(()=>{
    setCloneLoad('Clone on')
  },[])

  return (
    <div className={cloneLoad}>
      <h3 className='title'>{title}</h3>
      <div className="cloneImg">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt="cloneImg" />
        </a>
      </div>
      <div className="cloneStack">
        {stack.map((item: string, i:number) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className="cloneLink">
        <a className='gitHub' href={gitHub} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 461 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M230.015 0C357.052 0 460.03 105.575 460.03 235.833C460.03 340.006 394.199 428.379 302.861 459.592C291.199 461.915 287.059 454.55 287.059 448.271C287.059 440.496 287.334 415.103 287.334 383.545C287.334 361.556 279.974 347.204 271.717 339.89C322.941 334.047 376.764 314.103 376.764 223.523C376.764 197.762 367.84 176.739 353.073 160.224C355.465 154.267 363.354 130.279 350.819 97.8012C350.819 97.8012 331.543 91.482 287.633 121.982C269.255 116.761 249.566 114.134 230.015 114.042C210.464 114.134 190.797 116.761 172.442 121.982C128.486 91.482 109.165 97.8012 109.165 97.8012C96.6753 130.279 104.565 154.267 106.934 160.224C92.236 176.739 83.2424 197.762 83.2424 223.523C83.2424 313.873 136.951 334.123 188.037 340.081C181.459 345.969 175.501 356.357 173.431 371.607C160.32 377.633 127.014 388.063 106.497 352.019C106.497 352.019 94.3291 329.36 71.2356 327.704C71.2356 327.704 48.8091 327.406 69.6715 342.035C69.6715 342.035 84.7375 349.28 95.2031 376.537C95.2031 376.537 108.705 418.629 172.695 404.368C172.81 424.08 173.017 442.658 173.017 448.271C173.017 454.504 168.785 461.799 157.307 459.614C65.8992 428.447 0 340.029 0 235.833C0 105.575 103.001 0 230.015 0Z" />
          </svg>
        </a>
        <a className='cloneDemo' href={demo} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M1.375 10.125V21.625C1.375 24.4534 1.375 25.8676 2.25368 26.7463C3.13236 27.625 4.54657 27.625 7.375 27.625H21.625C24.4534 27.625 25.8676 27.625 26.7463 26.7463C27.625 25.8676 27.625 24.4534 27.625 21.625V7.375C27.625 4.54657 27.625 3.13236 26.7463 2.25368C25.8676 1.375 24.4534 1.375 21.625 1.375H10.125" strokeWidth="2" strokeLinecap="round" />
            <path d="M18.875 18.875V19.875H19.875V18.875H18.875ZM7.91544 6.50123C7.52492 6.1107 6.89175 6.1107 6.50123 6.50123C6.1107 6.89175 6.1107 7.52492 6.50123 7.91544L7.91544 6.50123ZM17.875 8.66667V18.875H19.875V8.66667H17.875ZM18.875 17.875H8.66667V19.875H18.875V17.875ZM19.5821 18.1679L7.91544 6.50123L6.50123 7.91544L18.1679 19.5821L19.5821 18.1679Z" />
          </svg>

        </a>
      </div>
    </div>
  )
}

export default Clone