import styled from 'styled-components'

export const Wrapper = styled.div`
    width:150px;
`

export const SubTitled = styled.p`
    color: #00AB63;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin:0;
    width:100%;
    display:flex;
    justify-content: flex-end;
    margin-top:8px ;


    &:before {
        content: " ";
        width: 100%;
        height:4px;
        margin:4px 4px 0 0;
        background-color:rgba(0, 168, 104, 0.6);
      }
`;