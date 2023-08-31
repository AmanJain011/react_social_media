import { styled } from "styled-components";

const Wrapper = styled.header`
background-color: #1877f2;
padding: 10px 0;

.inner{
    width: 98%;
    margin: auto;
    display: flex;

    .left{
        flex: 3;
        display: flex;
        align-items: center;

        .logo{
            font-size: 24px;
            font-weight: bold;
            color: white;
            cursor: pointer;
        }
    }

    .center{
        flex: 5;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 30px;
        padding-left: 10px;

        input{
            width: 70%;
            border: none;
            font-size: 1rem;

            &:focus{
                outline: none;
            }
        }
    }

    .right{
        flex: 4;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;

        .nav-links{
            font-size: 18px;
            display: flex;
            gap: 15px;

            span{
                cursor: pointer;
            }
        }

        .icon{
            display: flex;
            gap: 15px;

            div{
                cursor: pointer;
                position: relative;

                span{
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background-color: red;
                    border-radius: 50%;
                    top: -5px;
                    right: -5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
            }
        }

        .profile{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
        }
    }
}
`
export default Wrapper