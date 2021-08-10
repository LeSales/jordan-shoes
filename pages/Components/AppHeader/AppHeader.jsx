import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: 10rem;

  .offer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: "100%";
    height: 5rem;
    background-color: black;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: "100%";
    height: 5rem;
    background-color: #fff;
    color: #181818;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }
`;

function AppHeader() {
  return (
    <Wrapper>
      <div className="offer">Ganhe R$ 10,00 de desconto no frete</div>
      <div className="title">Jordan Shoes</div>
    </Wrapper>
  );
}

export default AppHeader;
