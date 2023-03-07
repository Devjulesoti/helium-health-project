import React from 'react'
import '../styles/footer.css'
import facebook from '../Assets/images/ico-facebook-pink.svg.png'
import instagram from '../Assets/images/ico-instagram-pink.svg.png'
import linkedin from '../Assets/images/ico-linkedin-pink.svg (1).png'
import twitter from '../Assets/images/ico-twitter-pink.svg.png'

const footer1 = () => {
  return (
    <div className=' container pb-4 footer1'>
        <div className="icons d-flex justify-content-center gap-2 py-4">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <p className='p-0 m-0'>+2348156410362</p>
        <p className='p-0 m-0'>team@techstudioheliumhealth.com</p>
    </div>
  )
}

export default footer1