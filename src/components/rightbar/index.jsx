import React from 'react'
import Wrapper from './style'
import Online from '../online'
import {Users} from '../../data.js'

const RightBar = () => {
  return (
    <Wrapper>
      <div className='birthday'>
        <img src="/assets/gift.png" alt="" />
        <span>
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img src="/assets/ad.png" alt="" className='adImg' />
      <h4 className='title'>Online Friends</h4>
      <ul className='friend-list'>
        {
          Users.map((user) => (
            <Online key={user.id} user={user} />
          ))
        }
      </ul>
    </Wrapper>
  )
}

export default RightBar
