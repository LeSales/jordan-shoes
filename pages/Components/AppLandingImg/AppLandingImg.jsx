import styled from "styled-components";
import bg from '../../../img/wallpaper.jpeg'
import Image from 'next/image'

export const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;

  .landingImg{
    width: 100;
    height: 50;
  }

`;

function AppLandingImg() {
  return (
    <Wrapper>
        <Image unsized={true} src={bg} alt="Jorda shoes"></Image>
    </Wrapper>
  );
}

export default AppLandingImg;
