import React from 'react'
import { Posts } from '../../../Components/Posts/Posts'
import { ProfileCard } from '../../../Components/ProfileCard/ProfileCard'
import { ProfileLeft } from '../../../Components/ProfileLeft/ProfileLeft'
import { RightSide } from '../../../Components/RightSide/RightSide'
import './Profile.css'
export const Profile = () => {
  return (
   <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCard/>
          <Posts/>
        </div>
        <RightSide/>
   </div>
  )
}
