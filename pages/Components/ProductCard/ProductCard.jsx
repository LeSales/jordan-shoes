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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function ProductCard() {
  return <Wrapper></Wrapper>;
}

export default ProductCard;
