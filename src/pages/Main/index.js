import React, { useState, useEffect, useMemo } from "react";
import api from "../../services/api";
import history from "../../services/history";
import { Link } from "react-router-dom";
import {
  MdCreate,
  MdFiberNew,
  MdChevronLeft,
  MdChevronRight
} from "react-icons/md";
import pt from "date-fns/locale/pt";
import { EventList, Container } from "./styles";
import { format, subMonths, addMonths, startOfMonth, getISOWeek, endOfMonth } from "date-fns";

export default function Main() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const dateFormated = useMemo(() => format(date, "MMMM", { locale: pt }), [
    date
  ]);
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);
 
  const firstDayFormat = useMemo(() => format(firstDay, 'yyyy-MM-dd',{locale: pt}),[
    firstDay
  ]);
  const lastDayFormat = useMemo(()=> format(lastDay, 'yyyy-MM-dd', {locale: pt}), [
    lastDay
  ]);
  

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get("/event-month", {
        params: {firstDayFormat, lastDayFormat}
      });
      const data = response.data.map(event => ({
        ...event
      }));
      setEvents(data);
    }
    loadEvents();
  }, [firstDayFormat, lastDayFormat]);
  console.log(events);
  
  function handleNextMonth() {
    setDate(addMonths(date, 1));
  }
  function handlePrevMonth() {
    setDate(subMonths(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevMonth}>
          <MdChevronLeft size={46} color="#fff" />
        </button>
        <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextMonth}>
          <MdChevronRight size={46} color="#fff" />
        </button>
      </header>
      <EventList>
        {events.map(e => (
          <li key={e.id}>
            <img src={e.File.url} alt={e.id} />
            <strong>{e.attraction}</strong>
            <span>{e.name}</span>
            <div>
              <button
                type="button"
                onClick={() => {
                  history.push(`/update-event/${e.id}`);
                }}
              >
                <div>
                  <MdCreate size={19} color="#FFF" />
                </div>
                <span>Editar Evento</span>
              </button>
              <Link to="/create-event">
                <button className="newButton" type="button">
                  <div>
                    <MdFiberNew size={19} color="#FFF" />
                  </div>
                  <span>Novo Evento</span>
                </button>
              </Link>
            </div>
          </li>
        ))}
      </EventList>
    </Container>
  );
}
