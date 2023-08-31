import { MoreVert } from '@mui/icons-material'
import Wrapper from './style'

const Post = () => {
  return (
    <Wrapper>
        <div className="top">
            <div className="left">
                <img src="/assets/person/1.jpeg" alt="" />
                <span className='username'>Safak kocaoglu</span>
                <span className='date'>5 mins ago</span>
            </div>
            <div className="right">
                <MoreVert />
            </div>
        </div>
        <div className="center">
            <span>Het! Its my first post:)</span>
            <img src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="bottom">
            <div className='left'>
                <img src="/assets/like.png" alt="" className='icon' />
                <img src="/assets/heart.png" alt="" className='icon' />
                <span>32 people like it</span>
            </div>
            <div className='right'>
                <span>9 comments</span>
            </div>
        </div>
    </Wrapper>
  )
}

export default Post