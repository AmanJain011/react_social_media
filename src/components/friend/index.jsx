import Wrapper from './style'

const Friend = ({user}) => {
    return (
        <Wrapper>
            <img src={user.profilePicture} alt="" />
            <span>{user.username}</span>
        </Wrapper>
    )
}

export default Friend
