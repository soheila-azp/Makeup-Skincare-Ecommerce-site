import React from 'react'
// import user from './../../../../assets/icons/user.svg'
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom'
const UserEntry = () => {
  return (
    <div className='w-40 h-20 flex items-center'>
           <UserRound className='pinkish w-5 h-5' alt="entry" />
        <Link to="/SignIn">
      <h2 className='pinkish great-vibes stroke'> User Entry</h2></Link>
    </div>
  )
}

export default UserEntry
