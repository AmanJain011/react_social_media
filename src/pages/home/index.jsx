import Feed from '../../components/feed'
import RightBar from '../../components/rightbar'
import Sidebar from '../../components/sidebar'
import TopBar from '../../components/topbar'
import Wrapper from './style'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Wrapper>
        <Sidebar />
        <Feed />
        <RightBar />
      </Wrapper>
    </div>
  )
}

export default Home
