import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Container, Center } from "./styles";
import { withStyles } from "@material-ui/core";
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
  },
  select: {
    minWidth: 305,
    marginLeft: 6
  }
});

function CreateUser(props) {
  const { classes } = props;
  const { register, errors, handleSubmit } = useForm();
  function onSubmit() {}
  return (
    <Container>
      <header>
        <strong>Novo Usuario</strong>
      </header>
      <Center>
        <Card className={classes.card} variant="outlined">
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="standard-basic"
                label="Nome"
                inputRef={register}
                name="name"
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="E-mail"
                inputRef={register}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Senha"
                inputRef={register}
              />
            </div>
            <TextField
              type="number"
              label="CPF"
              name="CPF"
              inputRef={register({ required: "CPF OBRIGATORIO", minLength: 11 })}
            />
            <div>
              <div>
            {errors.CPF && errors.CPF.message}
            </div>
              <Select
                className={classes.select}
                variant="outlined"
                native
                inputRef={register}
                name="type"
              >
                <option value="adm">Administrador</option>
                <option value="promoter">Promoter</option>
              </Select>
            </div>
            <Button className={classes.button2} type="submit">
              Enviar
            </Button>
          </form>
        </Card>
      </Center>
    </Container>
  );
}
CreateUser.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CreateUser);
