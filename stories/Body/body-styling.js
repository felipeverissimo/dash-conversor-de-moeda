import styled from 'styled-components'

export const ConversionBody = styled.div`
  background: url(dolarbills.png) no-repeat ;
  position: absolute;
  width: 1400px;
  height: 1000px;
  min-height:100vh;
  left: -1px;
  top: -7.54px;
  box-shadow: 0px -20px 40px rgba(0, 0, 0, 0.08);
  display:flex;
  align-items: center;
  padding-left:44px;

  & > .container{
    width:70vw;
    height:60vh;

    &::before{
      position: absolute;
      width: 213px;
      height: 213px;
      left: 907px;
      top: 288px;
      opacity: 0.7;
      content:' ';
      border-radius: 50%;
      border: 4px solid #008B57;
      box-sizing: border-box;
    }

    &::after{
      position: absolute;
      width: 310px;
      height: 310px;
      left: 859px;
      top: 236px;
      opacity: 0.2;
      content:' ';
      border-radius: 50%;
      border: 4px solid #008B57;
      border-radius: 50%;
      box-sizing: border-box;
    }
        
  }

  &::before{
    position: absolute;
    width: 36px;
    height: 36px;
    left: 996px;
    top: 377px;
    content:' ';
    border-radius: 50%;
    background: #00AB63;
  }

  &::after{
    position: absolute;
    top: 377px;
    content:' ';
    border-radius: 50%;
    width: 104px;
    height: 104px;
    left: 962px;
    top: 343px;
    opacity: 0.2;
    border: 4px solid #008B57;
    box-sizing: border-box;
  }
`