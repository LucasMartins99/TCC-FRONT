import React, { Component } from 'react';

import api from '../../services/api';
import { ProductList } from './styles';

export default class Main extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        events: [],
    };

    async componentDidMount() {
        const response = await api.get('/events');
        this.setState({ events: response.data });
        const data = response.data.map(event => ({
            ...event,
        }));
        this.setState({ events: data });
    }

    render() {
        const { events } = this.state;

        return (
            <ProductList>
                {events.map(event => (
                    <li key={event.id}>
                        <img src={event.File.url} alt={event.id} />
                        <strong>{event.name}</strong>
                        <span>{event.date}</span>
                    </li>
                ))}
            </ProductList>
        );
    }
}
