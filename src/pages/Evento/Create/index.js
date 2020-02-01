import React, { useState } from "react";
import { Form } from "@rocketseat/unform";
import { toast } from "react-toastify";
import api from "../../../services/api";
import history from "../../../services/history";
import * as Yup from "yup";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import DateFnsUtils from "@date-io/date-fns";
import ImgInput from "./imgInput/index";
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
  },
  button2: {
    paddingTop: 40,
    paddingLeft: 247
  },
  card: {
    background: "#F0EFEF",
    borderRadius: 8,
    padding: 5
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
  const handleDate = date2 => {
    setDate2(date2);
  };
  const handleTime = hours2 => {
    setHours2(hours2);
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
  async function handleSubmit(data) {
    const { avatar_id } = data;
    const date = format(date2, "yyyy/MM/dd", { locale: pt });
    const hours = format(hours2, "H:m");
    const aux = format(hours2, "yyyy/MM/dd H:m:s", { locale: pt });
    if (avatar_id === undefined) {
      avatar_id = 1;
    }

    try {
      await api.post("events", {
        name,
        attraction,
        description,
        date,
        hours,
        aux,
        valuepistaf,
        valuepistam,
        valuecamarotef,
        valuecamarotem,
        lote,
        avatar_id
      });

      toast.success("evento cadastrado com sucesso");
    } catch (err) {
      toast.error("Falha ao cadastrar revise os dados");
    }
  }
  const { classes } = props;
  const [name, setName] = useState("");
  const [attraction, setAttraction] = useState("");
  const [description, setDescription] = useState("");
  const [date2, setDate2] = useState(new Date());
  const [hours2, setHours2] = useState();
  const [valuepistaf, setValuepistaf] = useState("00,00");
  const [valuepistam, setValuepistam] = useState("00,00");
  const [valuecamarotef, setValuecamarotef] = useState("00,00");
  const [valuecamarotem, setValuecamarotem] = useState("00,00");
  const [lote, setLote] = useState("1");

  return (
    <Container>
      <header>
        <button type="button">
          <MdReply size={40} color="#000" />
        </button>
        <strong>Novo Evento</strong>
      </header>
      <Center>
        <Card className={classes.card} variant="outlined">
          <Form
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
          >
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
                  value={date2}
                  onChange={handleDate}
                  KeyboardButtonProps={{
                    "arial-label": "change date"
                  }}
                />

                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Hora do evento"
                  value={hours2}
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
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote feminino"
                value={valuecamarotef}
                onChange={handleCamaroteFem}
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
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote masculino"
                value={valuecamarotem}
                onChange={handleCamaroteMasc}
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Descrição do evento"
                value={description}
                onInput={e => setDescription(e.target.value)}
              />

              <ImgInput name="avatar_id" />
            </div>
            <div className={classes.button2}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                type="submit"
              >
                Cadastrar
              </Button>
            </div>
          </Form>
        </Card>
      </Center>
    </Container>
  );
}
CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateEvent);
