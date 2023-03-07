import React from 'react'
import '../styles/nav.css'
import people from '../Assets/images/intro-about.png.png'

const Nav = () => {
  return (
    <div className=' text-start align-items-center pt-3 container text-light nav-div d-flex justify-content-around '>
<div className='pe-3 ps-5'>
    <h3 className='africa'>AFRICA'S HEALTHTECH & DATA BACKBONE</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio quasi explicabo quod modi, porro eos fugit iusto voluptas debitis libero culpa itaque recusandae ullam nesciunt, veniam illum exercitationem blanditiis eveniet eum, natus temporibus tempora adipisci ut. Cum, error mollitia.</p>
</div>
 <img className='w-25' src={people} />
    </div>
  )
}

export default Nav