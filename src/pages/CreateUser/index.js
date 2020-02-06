import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Container, Center } from "./styles";
import { withStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { cpfMask } from "../../components/CpfMask";
import { toast } from "react-toastify";
import api from "../../services/api";
import * as Yup from "yup";
const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatorio"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O e-mail é obrigatorio"),
  password: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .required("A senha é obrigatória")
});
const styles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  },
  button2: {
    paddingTop: 35,
    paddingLeft: 87
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
  const handleCPF = event => {
    setCpf(cpfMask(event.target.value));
  };
  const { classes } = props;
  const [cpf, setCpf] = useState();
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  });
  async function onSubmit(data) {
    const { name, email, password, type } = data;
    try {
      await api.post("users", {
        name,
        email,
        password,
        type,
        cpf
      });
      toast.success("usuario cadastrado com sucesso");
    } catch (err) {
      toast.error("Falha ao cadastrar revise os dados");
    }
  }
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
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="E-mail"
                name="email"
                inputRef={register}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Senha"
                name="password"
                type="password"
                inputRef={register}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <TextField label="CPF" name="CPF" value={cpf} onChange={handleCPF} />
            <div>
              <div>{errors.CPF && errors.CPF.message}</div>
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
