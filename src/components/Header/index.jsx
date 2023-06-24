import { ButtonHeader, Container, Search } from "./styles";

import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';

import { useNavigate } from "react-router-dom";
import LogoExplorer from '../../assets/logoExplorer.svg';
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

const quantityDishes = 10

export function Header({ ...rest }) {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleHome() {
    navigate(`/`);
  }

  return (
    <Container {...rest}>
      <div className="menu-amburguer">
        <List />
      </div>

      <div className="wrapper-logo">
        <div
          className="logo"
          onClick={handleHome}
        >
          <img src={LogoExplorer} alt="" />
          <h1>food explorer</h1>
        </div>

        {user.isAdmin ? <span>admin</span> : null}
      </div>

      <Search>
        <Input
          placeholder="Pesquiar"
          type="text"
          icon={MagnifyingGlass}
        />
      </Search>

      {
        user.isAdmin
          ? <ButtonHeader title={'Novo Prato'} to="/createdish" />
          : <ButtonHeader icon={Receipt} title={`Pedidos (${quantityDishes})`} />
      }

      <div className="logout" onClick={signOut}>
        <SignOut />
      </div>

      {
        user.isAdmin
          ?
          null
          :
          <div className="receipt-mobile">
            <Receipt />
            <span>0</span>
          </div>
      }
    </Container>
  )
}