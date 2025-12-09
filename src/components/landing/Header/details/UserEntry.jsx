import React from 'react'
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom'

const UserEntry = () => {
  return (
    <div className='w-28 sm:w-36 h-20 flex items-center '>
      <UserRound className='pinkish w-5 h-5' alt="entry" />
      <Link to="/SignIn">
        <h2 className='pinkish great-vibes stroke text-sm sm:text-base'> User Entry</h2>
      </Link>
    </div>
  )
}

export default UserEntry;
