import styled from "styled-components";

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

  img{
    min-width: 150px;
    width: 20rem;
  }
`;

function ProductCard(props) {
  return <Wrapper>
    <img src={props.img} alt={props.alt}></img>
  </Wrapper>;
}

export default ProductCard;
