import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 100vw;
  height: 10vh;
  background-color:#000000;
  color:#FFF;
  span{
    margin-top: 0.5rem;
  }

`;

function AppFooter() {
  return (
    <Wrapper>
        <>
        <span>Criado por Leandro Sales</span>
        </>
    </Wrapper>
  );
}

export default AppFooter;
