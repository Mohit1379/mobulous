import React from 'react'
import Logo from './Logo'
import style from '../styles/sideSection.module.css';


function SideSection() {
    return (
      <div className={`d-flex flex-grow-1 p-5 ${style.side_section}`}>
        <div className='d-flex flex-column position-relative  w-100'>
          <Logo />
          <div className='d-flex justify-content-center align-items-center flex-grow-1'>
            <img src='/heroImage.png' width={580} height={500} alt='heroImage' className='img-fluid' />
          </div>
          <img src='/tree.png' width={170} height={200} alt='heroImage' className='bottom-0 img-fluid position-absolute ' />
        </div>
      </div>
    );
  }
  
  export default SideSection;
  