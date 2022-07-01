import React from 'react'
import './Infocard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
export const Infocard = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="Infocard">
       <div className="InfoHead">
       <h4>Your Info</h4>
       <div>
        <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
       </div>
        
       </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives In </b>
            </span>
            <span>Warri, Delta State</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>Free coders</span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}
