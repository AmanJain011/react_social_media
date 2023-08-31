import { styled } from "styled-components";

const Wrapper = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;

    div{
        position: relative;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        .online-status{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: absolute;
            background-color: limegreen;
            top: -2px;
            right: 0px;
            border: 2px solid white;
        }
    }

    .username{
        font-weight: 500;
        margin-left: 10px;
    }
`
export default Wrapper