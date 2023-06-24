import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/auth";
import { ButtoSigIn, ButtoTextSigIn, Container, Form } from "./styles";


export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Logo />

      <Form>
        <h3>
          Fazer login
        </h3>

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
          title="Entrar"
          onClick={handleSignIn}
        />

        <ButtoTextSigIn
          title="Criar uma conta"
          to="/register"
        />
      </Form>
    </Container>
  )
}