import { Container } from "./styles";

import LogoExplorer from '../../assets/logoExplorer.svg'

export function Logo() {
  return (
    <Container>
      <img src={LogoExplorer} alt="" />
      <h1>food explorer</h1>
    </Container>
  )
}