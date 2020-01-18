import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { Container, Cart } from "./styles";
import logo from "../../assests/images/logo2.png";

export default function Header() {
  return (

    <Container>
        
      <Link to="/">
        <img src={logo} alt="tiaNena" />
      </Link>

      <Cart to="/create-event">
        <MdAccountCircle size={44} color="#FFF" />
        
        <div>
          <strong>USERS</strong>
        </div>
      </Cart>
    </Container>
  );
}
