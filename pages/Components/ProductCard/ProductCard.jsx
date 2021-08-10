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
  justify-self: center;
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

  h2{
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    color: #181818;
  }

  span{
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    color: #181818;
  }

`;

function ProductCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Wrapper className="exemplo" onClick={handleClick}>
          <img src={props.img} alt={props.alt}></img>
        </Wrapper>

        <Wrapper className="exemplo" onClick={handleClick}>
          <h2>Modelo - Jordan n° {props.model}</h2>
          <span>Price - R$ {props.price}</span>
        </Wrapper>
      </ReactCardFlip>
    </>
  );
}

export default ProductCard;
