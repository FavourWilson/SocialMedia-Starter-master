import React from 'react'
import { Posts } from '../Posts/Posts'
import { PostShare } from '../PostShare/PostShare'

export const PostSide = () => {
  return (
    <div className='PostSide'>
        <PostShare/>
        <Posts/>
    </div>
  )
}
