import styled from 'styled-components'
import AppHeader from './Components/AppHeader'
import AppLandingImg from './Components/AppLandingImg'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (<>
  <AppHeader></AppHeader>
  <AppLandingImg></AppLandingImg>
  </>
  );
}
