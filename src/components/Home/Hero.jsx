import React, { useContext } from 'react'
import heroImage from "../../assets/images/hero.jpeg"
import { AuthContext } from '../../context/AuthContext'
const Hero = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='mt-[200px] lg:w-[90%] mx-auto md:flex justify-between items-center p-5 lg:p-0'>
      {user.emailVerified ? <><div className="heroContent w-full md:space-y-20 space-y-8">
          <span className='text-orange'>
          Sale up to 70% off
          </span>
          <div className='space-y-8'>
              <h1>New Collection For Fall</h1>
              <p>Discover all the new arrivals of ready-to-wear collection.</p>
          </div>
          <button className='uppercase bg-orange btn p-3'>shop now</button>
      </div>
      <div className="heroImage lg:h-[600px] h-[400px] md:w-[600px] -z-10 mt-12 md:mt-0">
          <img src={heroImage} alt="Hero images" className='h-full w-full object-cover float-right rounded-xl -mt-5'/>
      </div></> : <h1 className='text-orange'>Please verify your Email!</h1>}
    </div>
  )
}

export default Hero