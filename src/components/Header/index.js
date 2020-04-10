import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { Container, Cart } from "./styles";
import { DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../../assests/images/logo2.png";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="tiaNena" />
      </Link>

      <Cart>
        <MdAccountCircle size={49} color="#FFF" />
        <DropdownButton variant="light" alignRight title="USUARIO">
          <Dropdown.Item href="/register">NOVO USUARIO</Dropdown.Item>
          <Dropdown.Item href="/edit-user">EDITAR USUARIO</Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>SAIR</Dropdown.Item>
        </DropdownButton>
      </Cart>
    </Container>
  );
}
