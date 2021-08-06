import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 100vw;
  height: 20vh;
  background-color:#d3d62a;

  h2{
      margin:0;
      margin-bottom: 0.5rem;
  }
  span{
    margin-top: 0.5rem;
  }

`;

function AppDestaqueInfo() {
  return (
    <Wrapper>
        <>
        <h2>Destaques</h2>
        <span>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
        </>
    </Wrapper>
  );
}

export default AppDestaqueInfo;
