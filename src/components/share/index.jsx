import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import Wrapper from './style'

const Share = () => {
    return (
        <Wrapper>
            <div className='top'>
                <img src="/assets/person/1.jpeg" alt="" />
                <input
                    type="text"
                    placeholder="What's in your mind Safak?"
                />
            </div>
            <hr />
            <div className='bottom'>
                <div className='options'>
                    <div>
                        <PermMedia htmlColor='tomato'/>
                        <span>Photo or Video</span>
                    </div>
                    <div>
                        <Label htmlColor='blue'/>
                        <span>Tag</span>
                    </div>
                    <div>
                        <Room htmlColor='green'/>
                        <span>Location</span>
                    </div>
                    <div>
                        <EmojiEmotions htmlColor='goldenrod'/>
                        <span>Feelings</span>
                    </div>
                </div>
                <button>Share</button>
            </div>
        </Wrapper>
    )
}

export default Share
