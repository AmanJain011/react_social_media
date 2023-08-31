import { styled } from "styled-components";

const Wrapper = styled.div`
box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
-webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
border-radius: 10px;
margin: 30px 0px;
padding: 10px;

.top{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
        display: flex;
        align-items: center;
        gap: 10px;
        
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        .username{
            font-size: 15px;
            font-weightL: 500px;
        }

        .date{
            font-size: 12px;
        }
    }
}

.center{
    margin: 20px 0px;

    img{
        width: 100%;
        max-height: 500px;
        object-fit: contain;
        margin-top: 20px;
    }
}

.bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    
    .left{
        display: flex;
        align-items: center;
        gap: 5px;

        .icon{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }

    .right{
        border-bottom: 1px dashed gray;
        cursor: pointer;
    }
}
`
export default Wrapper