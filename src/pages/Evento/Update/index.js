import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import api from "../../../services/api";
import history from "../../../services/history";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
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
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();
  const { id } = props.match.params;
  const { classes } = props;
  const [name, setName] = useState("");
  const [attraction, setAttraction] = useState();
  const [description, setDescription] = useState();
  const [date2, setDate2] = useState(new Date());
  const [hours2, setHours2] = useState();
  const [valuepistaf, setValuepistaf] = useState();
  const [valuepistam, setValuepistam] = useState();
  const [valuecamarotef, setValuecamarotef] = useState();
  const [valuecamarotem, setValuecamarotem] = useState();
  const [lote, setLote] = useState();
  const [auxDate, setAuxDate] = useState(false);
  const [auxHours, setAuxHours] = useState(false);

  const handleDate = date2 => {
    setDate2(date2);
    setAuxDate(true);
  };

  const handleTime = hours2 => {
    setHours2(hours2);
    setAuxHours(true);
  };
  const handleCamaroteMasc = event => {
    setValuecamarotem(event.target.value);
  };
  const handlePistaFem = event => {
    setValuepistaf(event.target.value);
  };
  const handleCamaroteFem = event => {
    setValuecamarotef(event.target.value);
    console.log(valuecamarotef);
  };
  const handlePistaMasc = event => {
    setValuepistam(event.target.value);
  };
  const handleName = event => {
    setName(event.target.value);
  };
  const handleAttraction = event => {
    setAttraction(event.target.value);
  };
  const handleLote = event => {
    setLote(event.target.value);
  };
  const handleDescription = event => {
    setDescription(event.target.value);
  };
  async function onSubmit(data) {
    if (auxDate && auxHours) {
      const date = format(date2, "yyyy/MM/dd", { locale: pt });
      const hours = format(hours2, "H:m");
      const aux = format(hours2, "yyyy/MM/dd H:m:s", { locale: pt });
      try {
        await api.put(`/events/${id}`, {
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
          lote
        });
        toast.success("evento atualizado com sucesso");
        history.push('/main');
      } catch (err) {
        toast.error("Falha ao atualizar revise os dados");
      }
    }
    if (!auxDate && !auxHours) {
      try {
        await api.put(`/events/${id}`, {
          name,
          attraction,
          description,
          valuepistaf,
          valuepistam,
          valuecamarotef,
          valuecamarotem,
          lote
        });
        toast.success("evento atualizado com sucesso");
        history.push('/main');
      } catch (err) {
        toast.error("Falha ao atualizar revise os dados");
      }
    }
    if (auxDate && !auxHours) {
      const date = format(date2, "yyyy/MM/dd", { locale: pt });
      try {
        await api.put(`/events/${id}`, {
          name,
          attraction,
          date,
          description,
          valuepistaf,
          valuepistam,
          valuecamarotef,
          valuecamarotem,
          lote
        });
        toast.success("evento atualizado com sucesso");
        history.push('/main');
      } catch (err) {
        toast.error("Falha ao atualizar revise os dados");
      }
    }
    if (!auxDate && auxHours) {
      const hours = format(hours2, "H:m");
      const aux = format(hours2, "yyyy/MM/dd H:m:s", { locale: pt });
      try {
        await api.put(`/events/${id}`, {
          name,
          attraction,
          hours,
          aux,
          description,
          valuepistaf,
          valuepistam,
          valuecamarotef,
          valuecamarotem,
          lote
        });
        toast.success("evento atualizado com sucesso");
        history.push('/main');
      } catch (err) {
        toast.error("Falha ao atualizar revise os dados");
      }
    }
  }

  useEffect(() => {
    async function loadEvent() {
      const response = await api.get(`/event-filter/${id}`);

      setName(response.data.name);
      setAttraction(response.data.attraction);
      setValuecamarotef(response.data.valuecamarotef);
      setValuecamarotem(response.data.valuecamarotem);
      setValuepistaf(response.data.valuepistaf);
      setValuepistam(response.data.valuepistam);
      setLote(response.data.lote);
      setDescription(response.data.description);
      setDate2(response.data.date);
      setHours2(response.data.aux);
    }
    loadEvent();
  }, []);

  return (
    <Container>
      <header>
        <button type="button">
          <MdReply size={40} color="#000" />
        </button>
        <strong>Alterar evento</strong>
      </header>
      <Center>
        <Card className={classes.card} variant="outlined">
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="standard-basic"
                label="Nome do evento"
                name="name"
                inputRef={register}
                defaultValue=" "
                value={name}
                onChange={handleName}
              />

              <TextField
                id="standard-basic"
                label="Artista"
                name="attraction"
                inputRef={register}
                defaultValue=" "
                value={attraction}
                onChange={handleAttraction}
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
                  value={hours2}
                  label="Hora do evento"
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
                name="valuepistaf"
                onChange={handlePistaFem}
                defaultValue=" "
                value={valuepistaf}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote feminino"
                name="valuecamarotef"
                defaultValue=" "
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
                name="valuepistam"
                onChange={handlePistaMasc}
                defaultValue=" "
                value={valuepistam}
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <TextField
                label="Valor camarote masculino"
                name="valuecamotem"
                onChange={handleCamaroteMasc}
                value={valuecamarotem}
                defaultValue=" "
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Lote do evento"
                name="lote"
                inputRef={register}
                value={lote}
                defaultValue=" "
                onChange={handleLote}
              />
              <TextField
                id="standard-basic"
                label="Descrição do evento"
                name="description"
                inputRef={register}
                defaultValue=" "
                value={description}
                onChange={handleDescription}
              />
            </div>
            <div className={classes.button2}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                type="submit"
              >
                Alterar
              </Button>
            </div>
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
