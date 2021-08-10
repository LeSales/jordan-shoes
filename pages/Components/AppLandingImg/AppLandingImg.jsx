import styled from "styled-components";
import React, { useEffect } from "react";
import Typed from "typed.js";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 50vh;
  background-image: url("/wallpaper.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .filter {
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
    width: 75vw;
  }

  h1 {
    filter: brightness(100%);
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    margin: 0;
    color: #fff;
  }
  .type-text {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 3rem;
    color: #fff;
  }
  .image {
    width: 100px;
    height: 100;
  }

  .title-container {
    height: 25vh;
    max-width: 980px;
    width: 75vw;
    display: flex;
    align-items: flex-end;
  }

  .typed-container {
    display: flex;
    align-items: flex-start;
    height: 25vh;
    padding-bottom: 5vh;
  }

  .typed-cursor {
    display: none;
  }
`;

function AppLandingImg() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "O tênis <strong>Jordan</strong> é fruto de uma velha e forte</br> parceria entre a <strong>Nike</strong> e o jogador <strong>Michael Jordan</strong>.",
      ],
      typeSpeed: 30,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <div className="filter">
        <div className="container">
          <div className="title-container">
            <h1>A melhor loja de Jordan</h1>
          </div>
          <div className="typed-container" id="typed-strings">
            <p className="type-text" id="typed" ref={el}></p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppLandingImg;
