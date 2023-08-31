import React from 'react'
import Wrapper from './style'
import Share from '../share'
import Post from '../post'
import {Posts} from '../../data.js'

const Feed = () => {
  return (
    <Wrapper>
      <div className="inner">
        <Share />
        {
          Posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>
    </Wrapper>
  )
}

export default Feed
