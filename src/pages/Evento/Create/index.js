import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import { MdReply } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { Container, Center } from "./styles";
const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  }
});
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator={"."}
      decimalSeparator={","}
      decimalScale={2}
      isNumericString
      prefix="R$"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
function CreateEvent(props) {
  const handleDate = date => {
    setDate(date);
  };
  const handleTime = hours => {
    setHours(hours);
  };
  const handlePistaFem = event => {
    setValuepistaf(event.target.value);
  };
  const handleCamaroteFem = event => {
    setValuecamarotef(event.target.value);
  };
  const handlePistaMasc = event => {
    setValuepistam(event.target.value);
  };
  const handleCamaroteMasc = event => {
    setValuecamarotem(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(attraction);
    console.log(description);
    console.log(date);
    console.log(hours);
    console.log(valuepistaf);
  }
  const { classes } = props;
  const [name, setName] = useState("");
  const [attraction, setAttraction] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState();
  const [valuepistaf, setValuepistaf] = useState("00,00");
  const [valuepistam, setValuepistam] = useState("00,00");
  const [valuecamarotef, setValuecamarotef] = useState("00,00");
  const [valuecamarotem, setValuecamarotem] = useState("00,00");

  return (
    <Container>
      <header>
        <button type="button">
          <MdReply size={40} color="#000" />
        </button>
        <strong>Criar Evento</strong>
      </header>
      <Center>
        <Card variant="outlined">
          <form className={classes.root} onSubmit={handleSubmit}>
            <div>
              <TextField
                id="standard-basic"
                label="Nome do evento"
                value={name}
                onInput={e => setName(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Artista"
                value={attraction}
                onInput={e => setAttraction(e.target.value)}
              />
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd-MM-yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Data do evento"
                  value={date}
                  onChange={handleDate}
                  KeyboardButtonProps={{
                    "arial-label": "change date"
                  }}
                />

                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Hora do evento"
                  value={hours}
                  onChange={handleTime}
                  KeyboardButtonProps={{
                    "arial-label": "change date"
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
            <div>
              <TextField
                label="Valor pista feminino"
                value={valuepistaf}
                onChange={handlePistaFem}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote feminino"
                value={valuecamarotef}
                onChange={handleCamaroteFem}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
            </div>
            <div>
              <TextField
                label="Valor pista masculino"
                value={valuepistam}
                onChange={handlePistaMasc}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote masculino"
                value={valuecamarotem}
                onChange={handleCamaroteMasc}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
            </div>


            <TextField
              id="standard-basic"
              label="descrição do evento"
              value={description}
              onInput={e => setDescription(e.target.value)}
            />
            <button type="submit">enviar</button>
          </form>
        </Card>
      </Center>
    </Container>
  );
}
CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateEvent);
