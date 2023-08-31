import React from 'react'
import Wrapper from './style'
import Share from '../share'
import Post from '../post'

const Feed = () => {
  return (
    <Wrapper>
      <div className="inner">
        <Share />
        <Post />
        <Post />
      </div>
    </Wrapper>
  )
}

export default Feed
