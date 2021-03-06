import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  min-height: 150px;
  width: 20rem;
  height: 20rem;
  border-radius: 3px;
  background-color: #ebe9ea;
  cursor: pointer;

  img {
    min-width: 150px;
    width: 20rem;

    :hover {
      transform: scale(1.3);
      transition: 0.5s all ease;
    }
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #181818;
  }

  span {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    color: #181818;
  }

  .separator {
    height: 0.5rem;
    width: 1px;
  }

  .logo-color,
  .shape-color {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    border-radius: 20px;
    border: 1px solid #000;
  }
`;

function ProductCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div style={{ justifySelf: "center" }}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Wrapper onClick={handleClick}>
          <img src={props.img} alt={props.alt}></img>
        </Wrapper>

        <Wrapper onClick={handleClick}>
          <h2>Modelo - Jordan n° {props.model}</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Logo color -&nbsp;</span>
            <div
              className="logo-color"
              style={{ backgroundColor: props.logoColor }}
            ></div>
          </div>

          <div className="separator"></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Shape color -&nbsp;</span>
            <div
              className="shape-color"
              style={{ backgroundColor: props.shapeColor1 }}
            ></div>
            <div
              className="shape-color"
              style={{ backgroundColor: props.shapeColor2 }}
            ></div>
          </div>

          <div className="separator"></div>
          <span>Price - <strong>R$ {props.price}</strong></span>
        </Wrapper>
      </ReactCardFlip>
    </div>
  );
}

export default ProductCard;
