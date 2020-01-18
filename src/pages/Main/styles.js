import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  header {
    display: flex;
    align-self: center;
    align-items: center;
    
    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 40px;
      margin: 0 15px;
    }
  }
`;

export const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  list-style: none;
  padding-top: 40px;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 230px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 22px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .newButton {
      background: #08088a;
      &:hover {
        background: ${darken(0.03, "#08088A")};
      }
    }
    button {
      background: #1c1c1c;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      &:hover {
        background: ${darken(0.03, "#1C1C1C")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 10px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-left: 1px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        padding: 8px;
      }
    }
  }
`;
