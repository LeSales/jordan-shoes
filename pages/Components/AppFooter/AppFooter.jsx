import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background-color: #000000;
  color: #fff;
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
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
