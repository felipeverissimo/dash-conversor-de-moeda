import styled from 'styled-components'

export const WrapperButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 550;
  font-size:1em;
  width: 149px;
  height: 56px;
  border-radius:0.5em;
  transition:0.5 ease;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom:32px;
  box-sizing: border-box;
  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);

  
  &.primary{
    background: #00AB63;
    border: 1px solid #008B57;
    
    border-radius: 8px;
    color: #fff;
    font-family: open sans;
    font-size: 16px;
    line-height: 24px;
  }

  
  &.primary:hover {
    background-color:#04985a;
  }

  &.primary:disabled{
    background-color: #8C9CAD;;
    border-color: #8C9CAA;
  }
  
  &.secondary{
      background-color: white;
      color: #2E3742;
      border: 1px solid #D7E0EB;
  }

  &.secondary:hover {
    background-color: #eee;
  }

  &.secondary:disabled{
    background-color:black;
  }  
` 

export const AsciiIcon = styled.span`

    &.primary:before{
      content: "\\21B9";
      display: block;
      padding-right:16px;
      color:white;
      font-weight: 700;

    }

    &.secondary:before{
      content: "\\2190";
      display: block;
      padding-right:16px;
      color:black;
      font-weight: 700;

    }
`
