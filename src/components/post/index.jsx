import { MoreVert } from '@mui/icons-material'
import Wrapper from './style'
import {Users} from '../../data.js'

const Post = ({post}) => {
    const user = Users.filter(u => u.id === post.userId)

    return (
    <Wrapper>
        <div className="top">
            <div className="left">
                <img src={user[0].profilePicture} alt="" />
                <span className='username'>{user[0].username}</span>
                <span className='date'>{post.date}</span>
            </div>
            <div className="right">
                <MoreVert />
            </div>
        </div>
        <div className="center">
            <span>{post?.desc}</span>
            <img src={post.photo} alt="" />
        </div>
        <div className="bottom">
            <div className='left'>
                <img src="/assets/like.png" alt="" className='icon' />
                <img src="/assets/heart.png" alt="" className='icon' />
                <span>{post.like} people like it</span>
            </div>
            <div className='right'>
                <span>{post.comment} comments</span>
            </div>
        </div>
    </Wrapper>
  )
}

export default Post