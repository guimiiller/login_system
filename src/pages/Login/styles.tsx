import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    
    h2{
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    input {
        margin: 10px;
        background: transparent;
        border: none;
        padding: 5px 50px 5px 3px;
        border: 1px solid #c5c5c5;
        outline: none;
        color: #c5c5c5;
    }

    button{
        padding: 5px 50px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 20px;
        font-weight: 700;
        cursor: pointer;
        background: #000;
        color: #c5c5c5;
        border: 1px solid #c5c5c5;
    }

    button:hover{
        background: #c5c5c5;
        color: #000;
    }

`