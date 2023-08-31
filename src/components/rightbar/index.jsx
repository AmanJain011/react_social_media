import React from 'react'
import Wrapper from './style'

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
        <li>
          <div>
            <img src="/assets/person/3.jpeg" alt="" />
            <span className='online-status'></span>
          </div>
          <span className='username'>John Carter</span>
        </li>
        <li>
          <div>
            <img src="/assets/person/3.jpeg" alt="" />
            <span className='online-status'></span>
          </div>
          <span className='username'>John Carter</span>
        </li>
        <li>
          <div>
            <img src="/assets/person/3.jpeg" alt="" />
            <span className='online-status'></span>
          </div>
          <span className='username'>John Carter</span>
        </li>
        <li>
          <div>
            <img src="/assets/person/3.jpeg" alt="" />
            <span className='online-status'></span>
          </div>
          <span className='username'>John Carter</span>
        </li>
      </ul>
    </Wrapper>
  )
}

export default RightBar
