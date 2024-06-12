import React from 'react'
import {Props} from '../App'

const IntroBg = ({scrollPosition}:Props) => {
  let scrollData = scrollPosition /3
  let bgOpacity = 1 - scrollData / 150
  
  return (
    <div className="introBg">
      {/* introBgLeft */}
      <svg className='introBgLeft circle01' style={{
        'transform' : `translate(-${scrollData}px,-${scrollData}px)rotate(${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <circle cx="138.388" cy="137.679" r="137.547" fill="url(#paint0_linear_265_1558)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1558" x1="138.388" y1="0.132324" x2="138.388" y2="275.226" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5C00" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgLeft circle02' style={{
        'transform' : `translateX(-${scrollData}px)rotate(${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <circle cx="158.686" cy="157.73" r="157.686" transform="rotate(54.7997 158.686 157.73)" fill="url(#paint0_linear_265_1553)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1553" x1="158.686" y1="0.0436859" x2="158.686" y2="315.416" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5C00" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgLeft circle03' style={{
        'transform' : `translateY(-${scrollData}px)rotate(${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <circle cx="88.0696" cy="88.0694" r="87.934" transform="rotate(33.9922 88.0696 88.0694)" fill="url(#paint0_linear_265_1560)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1560" x1="88.0696" y1="0.135429" x2="88.0696" y2="176.003" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5C00" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgLeft square01' style={{
        'transform' : `translate(-${scrollData}px,-${scrollData}px)rotate(${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <rect x="52.2432" y="120.504" width="85.699" height="85.699" transform="rotate(-127.201 52.2432 120.504)" fill="url(#paint0_linear_265_1559)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1559" x1="95.0927" y1="120.504" x2="95.0927" y2="206.203" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2F2F2" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>

{/* introBgRight */}
      <svg className='introBgRight square02' style={{
        'transform' : `translateY(${scrollData}px)rotate(-${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <rect x="17.0432" y="0.172852" width="85.699" height="85.699" transform="rotate(11.3874 17.0432 0.172852)" fill="url(#paint0_linear_265_1555)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1555" x1="59.8927" y1="0.172852" x2="59.8927" y2="85.8719" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2F2F2" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgRight square03' style={{
        'transform' : `translate(${scrollData}px,-${scrollData}px)rotate(-${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <rect x="0.944458" y="8.63474" width="85.699" height="85.699" transform="rotate(-5.14834 0.944458 8.63474)" fill="url(#paint0_linear_265_1561)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1561" x1="43.794" y1="8.63474" x2="43.794" y2="94.3338" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2F2F2" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgRight triangle01' style={{
        'transform' : `translate(${scrollData}px,-${scrollData}px)rotate(-${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <path d="M0.480567 0.870015L66.1668 35.4179L3.40435 75.0299L0.480567 0.870015Z" fill="url(#paint0_linear_265_1556)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1556" x1="0.480567" y1="0.870015" x2="46.2206" y2="73.3419" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2F2F2" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgRight triangle02' style={{
        'transform' : `translateX(${scrollData}px)rotate(-${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <path d="M70.3237 0.661102L58.334 73.9038L0.898803 26.8991L70.3237 0.661102Z" fill="url(#paint0_linear_265_1557)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1557" x1="70.3237" y1="0.661102" x2="16.0473" y2="66.9815" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5C00" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>
      <svg className='introBgRight circle04' style={{
        'transform' : `translateX(${scrollData}px)rotate(-${scrollData}deg)`,
        'opacity' : bgOpacity
      }}>
        <circle cx="60.5824" cy="60.4668" r="60.4178" transform="rotate(-24.6866 60.5824 60.4668)" fill="url(#paint0_linear_265_1554)" fillOpacity="0.6" />
        <defs>
          <linearGradient id="paint0_linear_265_1554" x1="60.5824" y1="0.0490036" x2="60.5824" y2="120.885" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5C00" />
            <stop offset="1" stopColor="#1F1F1F" />
          </linearGradient>
        </defs>
      </svg>


    </div>
  )
}

export default IntroBg