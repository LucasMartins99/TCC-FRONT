import React from "react";
import { Container, TableDiv } from "./styles";
import { Table } from "react-bootstrap";

export default function Users() {
  return (
    <Container>
      <TableDiv>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>
                          <th>NOME</th>
                          <th>EMAIL</th>
                          <th>CPF</th>
                          <th>TIPO</th>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Fabio</td>
                      <td>fabio.lucaslima@outlook.com</td>
                      <td>47276685802</td>
                      <td>ADM</td>
                  </tr>
              </tbody>
          </Table>
      </TableDiv>
    </Container>
  );
}
