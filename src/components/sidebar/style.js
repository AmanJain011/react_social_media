import { styled } from "styled-components";

const Wrapper = styled.div`
flex: 3;
height: calc(100vh - 50px);
overflow-y: auto;
position: sticky;
top: 50px; 

&::-webkit-scrollbar{
    width: 5px;
}

&::-webkit-scrollbar-track{
    background-color: #f1f1f1;
}

&::-webkit-scrollbar-thumb{
    background-color: rgb(179, 179, 179);
}

.inner{
    padding: 20px;
    
    ul{
        li{
            list-style: none;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
    
            span{
                margin-left: 15px;
            }
        }
    }

    button{
        border: none;
        padding: 10px;
        font-weight: 500;
        border-radius: 5px;
        width: 150px;
    }

    hr{
        margin: 20px 0;
    }
}
`
export default Wrapper