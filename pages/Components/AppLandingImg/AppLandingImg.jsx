import styled from "styled-components";
import bg from '../../../img/wallpaper.jpeg'
import Image from 'next/image'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  width: 100vw;
  max-width: 100vw;
  height: 50vh;
  background-color:#F45;

  h1{
    padding-left: 4rem;
      margin: 0;
      margin-bottom: 0.5rem;
  }
  span{
    padding-left: 4rem;
    margin-top: 0.5rem;
  }

`;

function AppLandingImg() {
  return (
    <Wrapper>
        <>
        <h1>O melhor da loja Jordan</h1>
        <span>O tênis Jordan é fruto de uma velha e forte<br/> parceria entre a Nike e o jogador Michael Jordan.</span>
        </>
    </Wrapper>
  );
}

export default AppLandingImg;
