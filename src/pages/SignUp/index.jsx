import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ButtoSigIn, ButtoTextSigIn, Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.res) {
          alert(error.res.message.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Logo />

      <Form>
        <h3>
          Crie sua conta
        </h3>

        <div className="name">
          <label className="labels" htmlFor="name">
            Seu Nome
          </label>
          <Input
            placeholder="Nome: John Doe"
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="email">
          <label className="labels" htmlFor="email">
            Email
          </label>
          <Input
            placeholder="Email: email@email.com"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label className="labels" htmlFor="password">
            Senha
          </label>
          <Input
            placeholder="Senha: *********************"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <ButtoSigIn
          title="Criar Conta"
          onClick={handleSignUp}
        />

        <ButtoTextSigIn
          title="Já tenho uma conta"
          to="/"
        />
      </Form>
    </Container>
  )
}