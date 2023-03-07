import React from 'react'
import girl from '../assets/Images/intro-patients.png.png'

import '../styles/Solution.css'
import fine from '../assets/Images/a (2).png'


const Section2 = () => {
  return (
    <div className='section2'>
      < div className="img-picture">
        <div className="text-para">
        <h1 className=' '><strong>YOUR CARE, ON YOUR TERMS</strong></h1>
        <h4>Take control of your health with our wealth of patient
         resources.</h4>
        </div>
       
      
      <img src={girl} alt=""/>
      <div className='arrow'>
        <a href="#Footer-head" ><img  src={fine} alt="" /></a>
      </div>
      
      
      
      
      
     
      </div>
      
      
      
    </div>
  )
}

export default Section2