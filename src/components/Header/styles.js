import styled from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Cart = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.4s;

  
  div {
    text-align: center;
    margin-left: 10px;
    
  }
  strong {
    display: block;
    color: #fff;
  }
  span {
    font-size: 14px;
    color: #999;
  }
`;
