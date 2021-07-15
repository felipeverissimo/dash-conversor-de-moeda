import styled from 'styled-components'
import { keyframes } from 'styled-components'

const shake = keyframes`
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
`;

export const WrapperInput = styled.div`
    font-family:open sans;
    font-size: 16px;
    line-height: 24px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: solid  1px #ccc;
    border-radius: .2em; 
    padding: 16px;
    overflow   :hidden;
    width: fit-content;
    height:60px;
    display: flex;
    justify-content: space-between;
    align-center:center
    -webkit-box-shadow: 0px 11px 12px 4px rgba(204,204,204,0.3); 
    box-shadow: 0px 11px 12px 4px rgba(204,204,204,0.3);
    transition: .3s ease-in;


    &.input-get-error{
        border-bottom: 1px solid red;
        outline:none;
        animation: ${shake}  0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
    }

    &.input-get-error > span.input-get-value {
        color: red;
    }

    &.input-get-error > span{
        color: red;
    }

    &.input-get-error > input{
        color: red;
    }

    &.input-get-error > input::placeholder{
        color: red;
    } 

    &> span.input-get-value {
        color: black;

    }

    & > input{
        border: none;
        outline:none;
    }

    & > input::placeholder{
        color: #aaa;
    } 

    & > span{
        border: none;
        outline:none;
        color: #aaa;
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 0 8px;
    }

    }
`

export const InputTitle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color:#2E3742;
    margin:0 0 16px;
    transition: .3s ease-in;

    &.input-get-error{
        color: red;
        animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
    }

    &::after{
      position: absolute;
      opacity: 0.7;
      content:' *';
      margin-left:4px;
      color: #00AB63;
      box-sizing: border-box;
    }

    
`

