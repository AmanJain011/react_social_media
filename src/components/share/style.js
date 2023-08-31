import { styled } from "styled-components";

const Wrapper = styled.div`
border-radius: 10px;
height: 170px;
box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
-webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
padding: 10px;

.top{
    display: flex;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }

    input{
        width: 80%;
        border: none;

        &:focus{
            outline: none;
        }
    }
}

hr{
    margin: 20px;
}

.bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

    .options{
        display: flex;
        gap: 15px;

        div{
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 3px;
            font-size: 14px;
            font-weight: 500px;
        }
    }

    button{
        padding: 7px;
        border-radius: 5px;
        background-color: green;
        color: white;
        border: none;
        font-weight: 500px;
        cursor: pointer;
    }
}
`
export default Wrapper