import React from 'react'
import Wrapper from './style'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import Friend from '../friend'
import {Users} from '../../data.js'

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="inner">
        <ul>
          <li>
            <RssFeed />
            <span>Feed</span>
          </li>
          <li>
            <Chat />
            <span>Chats</span>
          </li>
          <li>
            <PlayCircleFilledOutlined />
            <span>Videos</span>
          </li>
          <li>
            <Group />
            <span>Groups</span>
          </li>
          <li>
            <Bookmark />
            <span>Bookmarks</span>
          </li>
          <li>
            <HelpOutline />
            <span>Questions</span>
          </li>
          <li>
            <WorkOutline />
            <span>Jobs</span>
          </li>
          <li>
            <Event />
            <span>Events</span>
          </li>
          <li>
            <School />
            <span>Courses</span>
          </li>
        </ul>
        <button>Show More</button>
        <hr />
        <ul className='friend-list'>
          {
            Users.map((user) => (
              <Friend  key={user.id} user={user}/>
            ))
          }
        </ul>
      </div>
    </Wrapper>
  )
}

export default Sidebar
