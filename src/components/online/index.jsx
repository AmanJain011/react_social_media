import Wrapper from './style'

const Online = ({user}) => {
    return (
        <Wrapper>
            <div>
                <img src={user.profilePicture} alt="" />
                <span className='online-status'></span>
            </div>
            <span className='username'>{user.username}</span>
        </Wrapper>
    )
}

export default Online
