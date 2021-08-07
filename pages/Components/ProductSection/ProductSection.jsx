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
        <ProductCard img="/1.png" alt="Jordan 1"/>
        <ProductCard img="/2.png" alt="Jordan 2"/>
        <ProductCard img="/3.png" alt="Jordan 3"/>
        <ProductCard img="/4.png" alt="Jordan 4"/>
        <ProductCard img="/5.png" alt="Jordan 5"/>
        <ProductCard img="/6.png" alt="Jordan 6"/>
        <ProductCard img="/7.png" alt="Jordan 7"/>
        <ProductCard img="/8.png" alt="Jordan 8"/>
      </div>
    </Wrapper>
  );
}

export default ProductSection;
