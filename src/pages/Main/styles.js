import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line import/prefer-default-export
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }
  img {
    align-self: center;
    max-width: 260px;
  }
  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }
`;
export const Container = styled.div`
  img {
    margin: auto;
    max-width: 450px;
    max-height: 300px;
  }
  h3{
      color: #000;
  }
`;
