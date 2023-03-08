import React from 'react'
import Footer from '../Components/Footer'
import Navbar1 from '../Components/Navbar1'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'

const Landing = () => {
  return (
    <div>
        <header>
            {/* <Navbar1/> */}
        </header>
        <main>
            <Section1 />
            <Section2 />
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            {/* <Footer/> */}
        </main>
    </div>
  )
}

export default Landing