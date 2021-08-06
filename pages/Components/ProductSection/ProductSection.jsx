import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 40vh;
  height: auto;
  padding: 5rem 0;
  background-color: #f6f6f6;

  .container {
    display: grid;
    max-width: 980px;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 5rem 0;
    width: 100vw;
    min-height: 100px;
  }
`;

function ProductSection() {
  return (
    <Wrapper>
      <div className="container">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </Wrapper>
  );
}

export default ProductSection;
