import React from 'react'
import { Building2 } from 'lucide-react';
import Repos from './Repos';
const Profile = ({user}) => {
  return (
    <div className='flex justify-center gap-4 w-full p-5'>
      <div className='w-[30%]'>
        <img className='rounded-full shadow-md' src={user.avatar_url} alt='profile.png'/>
        <h2 className='text-3xl font-semibold'>{user.name}</h2>
        <p className='text-2xl text-gray-400'>{user.login}</p>
        <p>{user.bio}</p>
        <p> <Building2 /> {user.company?user.company:""} </p>
      </div>
      <div className='w-full'>
      <Repos repoUrl={user.repos_url}/>
      </div>
    </div>
  )
}

export default Profile