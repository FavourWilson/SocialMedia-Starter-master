import React, {useState,useRef} from 'react'
import ProfileImg from '../../img/profileImg.jfif'
import './PostShare.css'
import {UilScenery, UilPlayCircle, UilLocationPoint,UilSchedule, UilTimes} from '@iconscout/react-unicons';

export const PostShare = () => {
    const [image,setImage] = useState(null)
    const imageRef = useRef();

    const onImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),
            });

        }
    }
  return (
    <div className='PostShare'>
        <img src={ProfileImg} alt="" />
        <div>
            <input type="text" placeholder='Whats happening' />
            <div className="postOption">
            <div className="options" style={{color: "var(--photo)"}}
            onClick={()=>imageRef.current.click()}
            >
                <UilScenery/> 
                Photo
            </div>
            <div className="options" style={{color: "var(--video)"}}>
                <UilPlayCircle/>
                Video
            </div>
            <div className="options">
                <UilLocationPoint style={{color: "var(--location)"}}/>
                Location
            </div>
            <div className="options">
                <UilSchedule style={{color: "var(--shedule)"}}/>
                Schedule
            </div>
            <button className='button ps-button'>Share</button>
            <div style={{display:"none"}}>
            <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>

            </div>
            
        </div> 
        {image && (
                <div className="PreviewImage">
                    <UilTimes onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )}
        </div>
        
    </div>
  )
}

