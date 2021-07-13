import styled from 'styled-components'


export const WrapperRadio = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 24px;
    padding: 0;
    margin: 16px 0 0 0 ;
    

   & > label{
     font-size: 16px;
     font-weight:500;
     margin: 0px 12px ;
     cursor: pointer;

    & > input[type=radio]{
        transform: translateX(-12px);
        visibility:none;
        cursor: pointer;
        position:relative;

        &:before {
            transform: translateX(-8px);
            transform: translateY(-4px);
            width: 20px;
            height: 20px;
            border-radius: 15px;
            top: -2px;
            left: -1px;
            position: absolute;
            background-color: white;
            content: '';
            display: inline-block;
            visibility: visible;
            border: 3px solid #00a868;
        }

        &:checked:after {
            transform: translateX(-8px);
            transform: translateY(-4px);
            width: 12px;
            height: 12px;
            border-radius: 15px;
            top: 40%;
            left: 45%;
            position: absolute;
            background-color: #00a868;
            content: '';
            display: inline-block;
            visibility: visible;
            border: none;
        }
    }

    

   

   }
    

    

    

   
`
