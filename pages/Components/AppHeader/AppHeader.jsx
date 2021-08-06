import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: 6rem;

  .offer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: "100%";
    height: 3rem;
    background-color: black;
    color: #fff;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: "100%";
    height: 3rem;
    background-color: #FFF;
    color: #000;
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
