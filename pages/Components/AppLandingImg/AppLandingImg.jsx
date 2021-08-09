import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 50vh;
  background-image: url("/wallpaper.jpeg");
  background-attachment:fixed;
  background-repeat:no-repeat;
  background-position:center;
  background-size: cover;

  .filter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 980px;
    width: 100%;
  }

  h1 {
    filter: brightness(100%);
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    margin: 0;
    margin-bottom: 1rem;
    color: #fff;
  }
  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    margin-top: 1rem;
    line-height: 3rem;
    color: #fff;
  }
  .image {
    width: 100px;
    height: 100;
  }
`;

function AppLandingImg() {
  return (
    <Wrapper>
      <div className="filter">
        <div className="container">
          <h1>A melhor loja de Jordan</h1>
          <span>
            O tênis Jordan é fruto de uma velha e forte
            <br /> parceria entre a Nike e o jogador Michael Jordan.
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppLandingImg;
