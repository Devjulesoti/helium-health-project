import React from 'react'

import first from '../assets/Images/pics1.png'
import second from '../assets/Images/pics2.png'
import third from '../assets/Images/pics3.png'
import fourth from '../assets/Images/pics4.png'
import fifth from '../assets/Images/pics5.png'
import sixth from '../assets/Images/pics6.png'
import phone from '../assets/Images/hand-mobile.png.png'
import apple from '../assets/Images/appstore.png.png'
import playstore from '../assets/Images/gplay.png.png'
import '../styles/Solution.css'


const Section3 = () => {
  return (
    <div className='d-flex justify-md-content-center section3  '>
        <div className='first'>
        <div className='img-text'>
          <img src={first} alt="" />
          <p>Rich personal health records</p>


        </div>

        <div className='img-text'>
          <img src={second} alt="" />
          <p>Lab and diagonist result update</p>

        </div>

        <div className='img-text'>
          <img src={third} alt="" />
          <p>Lab and diagonist result update</p>
        </div>


        <div className='img-text'>
          <img src={fourth} alt="" />
          <p>Lab and diagonist result update</p>
        </div>


        <div className='img-text'>
          <img src={fifth} alt="" />
          <p>Lab and diagonist result update</p>
        </div>

        <div className='img-text'>
          <img src={sixth} alt="" />
          <p>Lab and diagonist result update</p>

        </div>
        </div>

        <div className='hand-phone'>
        <img src={phone} alt="" className='w-75' />
        </div>
        <div className='third' >
           <h1>Personal Health Records </h1>
            <p>All your health records and more,in one place</p>
            <div className='d-flex gap-3 '>
            <a href="www.apple.com"> <img src={apple} alt="" /></a>
            <a href="www.apple.com"> <img src={playstore} alt="" /></a>
            </div>

        </div>

    </div>
  )
}

export default Section3