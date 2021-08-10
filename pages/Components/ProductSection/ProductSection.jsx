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
        <ProductCard
          img="/1.png"
          alt="Jordan 1"
          model="001"
          price="2.399"
          logoColor="#000"
          shapeColor1="#859f89"
          shapeColor2="#FFF"
        />
        <ProductCard
          img="/2.png"
          alt="Jordan 2"
          model="002"
          price="2.399"
          logoColor="#7c748b"
          shapeColor1="#7c748b"
          shapeColor2="#FFF"
        />
        <ProductCard
          img="/3.png"
          alt="Jordan 3"
          model="003"
          price="2.399"
          logoColor="#3a1055"
          shapeColor1="#3a1055"
          shapeColor2="#FFF"
        />
        <ProductCard
          img="/4.png"
          alt="Jordan 4"
          model="004"
          price="2.399"
          logoColor="#151718"
          shapeColor1="#a6a6a7"
          shapeColor2="#d5d5d6"
        />
        <ProductCard
          img="/5.png"
          alt="Jordan 5"
          model="005"
          price="2.399"
          logoColor="#FFF"
          shapeColor1="#6c0533"
          shapeColor2="#000"
        />
        <ProductCard
          img="/6.png"
          alt="Jordan 6"
          model="006"
          price="2.399"
          logoColor="#FFF"
          shapeColor1="#ff5b0b"
          shapeColor2="#FFF"
        />
        <ProductCard
          img="/7.png"
          alt="Jordan 7"
          model="007"
          price="2.399"
          logoColor="#b8bab3"
          shapeColor1="#b0b2ac"
          shapeColor2="#e9e9e7"
        />
        <ProductCard
          img="/8.png"
          alt="Jordan 8"
          model="008"
          price="2.399"
          logoColor="#000"
          shapeColor1="#000"
          shapeColor2="#FFF"
        />
      </div>
    </Wrapper>
  );
}

export default ProductSection;
