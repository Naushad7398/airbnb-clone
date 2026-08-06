import React from 'react'
import { Link } from 'react-router-dom'
import { FaAirbnb } from 'react-icons/fa'


const Logo = () => {
  return (
    <Link
      to="/"
      className='text-2xl font-bold text-rose-500 flex'
    >
      <FaAirbnb className='text-4xl' />
      <span className='text-2xl font-bold'>Airbnb</span>
    </Link>
  )
}

export default Logo