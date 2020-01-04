import React, { Component } from "react";

import api from "../../services/api";

import Carousel from "react-bootstrap/Carousel";
import { Container } from "./styles";

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    events: []
  };

  async componentDidMount() {
    const response = await api.get("/events");
    this.setState({ events: response.data });
    const data = response.data.map(event => ({
      ...event
    }));
    this.setState({ events: data });
  }

  render() {
    const { events } = this.state;

    return (
       <Container>
      <Carousel>
        {events.map(event => (
          <Carousel.Item>
            <img src={event.File.url} alt={event.id} className="d-block w-75"/>
            <Carousel.Caption>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </Container>
    );
  }
}
