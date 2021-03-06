import React from 'react'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
export const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={logo} alt="" />
        <div className="Search">
            <input type="text" name=""placeholder='#Explore' id="" />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}
