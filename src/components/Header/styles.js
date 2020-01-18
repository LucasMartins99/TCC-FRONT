import styled from "styled-components";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
export const Cart = styled(Link)`
margin-right: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
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
