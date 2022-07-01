import React from 'react'
import { FollowersCard } from '../FollowersCard/FollowersCard'
import { Infocard } from '../InfoCard/Infocard'
import { LogoSearch } from '../LogoSearch/LogoSearch'

export const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <Infocard/>
        <FollowersCard/>
    </div>
  )
}
