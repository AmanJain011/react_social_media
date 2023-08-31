import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import Wrapper from './style'

const Topbar = () => {
    return (
        <Wrapper>
            <div className="inner">
                <div className="left">
                    <span className="logo">Social app</span>
                </div>
                <div className="center">
                    <Search />
                    <input
                        type="text"
                        className="search"
                        placeholder='search for friend, post or video'
                    />
                </div>
                <div className="right">
                    <div className="nav-links">
                        <span>Home</span>
                        <span>Timeline</span>
                    </div>
                    <div className="icon">
                        <div>
                            <Person />
                            <span>1</span>
                        </div>
                        <div>
                            <Chat />
                            <span>2</span>
                        </div>
                        <div>
                            <Notifications />
                            <span>3</span>
                        </div>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="profile" className="profile" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Topbar
