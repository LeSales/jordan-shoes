import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 25vh;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: #181818;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  span {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    margin-top: 0.5rem;
    color: #474747;
  }
`;

function AppDestaqueInfo() {
  return (
    <Wrapper>
      <>
        <h2>Destaques</h2>
        <span>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </span>
      </>
    </Wrapper>
  );
}

export default AppDestaqueInfo;
