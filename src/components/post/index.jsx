import { MoreVert } from '@mui/icons-material'
import Wrapper from './style'
import {Users} from '../../data.js'
import { useState } from 'react'

const Post = ({post}) => {
    const user = Users.filter(u => u.id === post.userId)
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

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
                <img src="/assets/like.png" alt="" className='icon' onClick={likeHandler} />
                <img src="/assets/heart.png" alt="" className='icon' onClick={likeHandler} />
                <span>{like} people like it</span>
            </div>
            <div className='right'>
                <span>{post.comment} comments</span>
            </div>
        </div>
    </Wrapper>
  )
}

export default Post