import { Container } from "./styles";

import LogoExplorerGray from '../../assets/logoExplorerGray.svg'

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={LogoExplorerGray} alt="" />
        <h1>food explorer</h1>
      </div>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}