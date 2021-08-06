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
  background-color: #655fa1;

  .container {
    max-width: 980px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
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
