import { styled } from "styled-components";

const Wrapper = styled.div`
flex: 3.5;
padding: 20px 20px 0px 0px;

.birthday{
    display: flex;
    align-items: center;
    font-weight: 300px;
    font-size: 15px;
    gap: 10px;

    img{
        width: 40px;
        height: 40px;
    }
}

.adImg{
    width: 100%;
    border-radius: 10px;
    margin: 30px 0px;
}

.title{
    margin-bottom: 20px;
}

.friend-list{
    margin: 0;
    padding: 0;
    list-style: none;

    li{
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
        }
    }
}


`
export default Wrapper;