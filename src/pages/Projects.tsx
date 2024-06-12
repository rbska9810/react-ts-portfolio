import React from 'react'
import Project from '../components/Project';


const Projects = () => {

  const project = {
    title: [
      'portfolio-react-ts',
      'portfolio-ts',
      '베스트슬립-리뉴얼',
      '한국도서관협회-리뉴얼',
      'Weather',
      '가위바위보게임'
    ],
    img: [
      'project01.png',
      'project02.png',
      'project03.png',
      'project04.png',
      'project05.png',
      'project06.png',
    ],
    stack: [
      ['react', 'ts'],
      ['html', 'scss', 'ts'],
      ['html', 'scss', 'js'],
      ['html', 'css', 'js'],
      ['react', 'js'],
      ['react', 'js'],
    ],
    stackColor: [
      ['#00D8FF', '#2F74C0'],
      ['#E44D26', '#CD6799', '#2F74C0'],
      ['#E44D26', '#CD6799', '#FFDF00'],
      ['#E44D26', '#264DE4', '#FFDF00'],
      ['#00D8FF', '#FFDF00'],
      ['#00D8FF', '#FFDF00'],
    ],
    soloOrTeam: [
      '개인', '개인', '팀', '개인', '개인', '개인'
    ],
    des: [
      'React-TypeScript를 사용하여 포트폴리오 웹사이트를 개발하였습니다. 사용할 수 있는 기술 및 작업한 프로젝트를 확인할 수 있습니다.',
      '기존에 만들었던 포트폴리오 웹사이트를 TypeScript를 공부하며, 적용해 수정해보았습니다.',
      '답답한 느낌이던 기존 홈페이지와는 다르게 시원하고 깔끔하게 개선을 하는 것에 중점을 두었습니다. pc와 mobile 모두 보기 편하도록 반응형 웹페이지로 개발하였습니다.',
      '공공기관으로써 조금 더 깔끔하고 정돈된 UI로 개선하여 작업하는데에 중점을 두었습니다. pc와 mobile 모두 보기 편하도록 반응형 웹페이지로 개발하였습니다.',
      'React를 배우며 만들었던 날씨 웹 입니다. pc와 mobile 모두 보기 편하도록 반응형 웹페이지로 개발하였습니다.',
      'React를 사용하여 가위바위보 게임을 만들었습니다.'
    ],
    linkText: [
      ['Demo', 'GitHub', 'Figma'],
      ['Demo', 'GitHub', 'Figma'],
      ['Before', 'Demo', 'GitHub', 'Figma'],
      ['Before', 'Demo', 'GitHub', 'Figma'],
      ['Demo', 'GitHub'],
      ['Demo', 'GitHub'],
    ],
    link: [
      [
        '/',
        'https://github.com/rbska9810/react-ts-portfolio.git',
        'https://www.figma.com/design/v2H4hEpzNfnYm5YprPp9SX/personalPortfolio?node-id=257-6&t=gM1j8uxGSjngLKjN-1'
      ],
      [
        'https://rbska9810.github.io/portfolio/',
        'https://github.com/rbska9810/portfolio.git',
        'https://www.figma.com/design/v2H4hEpzNfnYm5YprPp9SX/personalPortfolio?node-id=0-1&t=gM1j8uxGSjngLKjN-1'
      ],
      [
        'https://bestsleep.us/?gad_source=1&gclid=CjwKCAjwmYCzBhA6EiwAxFwfgFvS8eRwfy8KuhlCvGOHtzomvnQQmkmiYZXPXQ5X5hRmffmf89dKrxoC-mAQAvD_BwE',
        'https://rbska9810.github.io/project-bestSleep/',
        'https://github.com/rbska9810/project-bestSleep.git',
        'https://www.figma.com/design/HNKJAath2PaTm5LkzHKJO8/%EB%84%A4%EC%9D%B4%EB%B9%84%EC%A6%88?node-id=188-35&t=LhRnsHtS2Vb7AUQy-1'
      ],
      [
        'https://www.kla.kr/kla/',
        'https://rbska9810.github.io/Korean-Library-Association/',
        'https://github.com/rbska9810/Korean-Library-Association.git',
        'https://www.figma.com/design/O7j6WcaZVkyak8hxTMvUDa/%EA%B3%B5%EA%B3%B5%EA%B8%B0%EA%B4%80%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=0-1&t=bvaNtVCJgQTRmWtR-1'
      ],
      [
        'https://main--weather-rbska9810.netlify.app/',
        'https://github.com/rbska9810/react-weather-api.git'
      ],
      [
        'https://rockscissorpapergame-rbska9810.netlify.app/',
        'https://github.com/rbska9810/react-RockScissorPaperGame.git'
      ]
    ]
  }


  return (
    <div className='Projects' id='Projects'>
      <div className="inner projectsInner">
        <div className="projectsTitle">
          <span>03</span>
          <h2>projects</h2>
        </div>
        <div className="projectsContent">
          {project.title.map((item: string, i: number) => (
            <Project
              key={i}
              title={project.title[i]}
              img={project.img[i]}
              stack={project.stack[i]}
              soloOrTeam={project.soloOrTeam[i]}
              des={project.des[i]}
              stackColor={project.stackColor[i]}
              linkText={project.linkText[i]}
              link={project.link[i]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects