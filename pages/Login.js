import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Container, AppShell } from '@mantine/core'
import Registro from './registro'
import Link from 'next/link';
import Layout from '../components/Layout';
import firebase from '../firebase/firebase';
import store from '../utils/store'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  async function onLogin() {
    await firebase.auth.loginUsuario(email, pass)
      .then(response => {
        store.setUsuario(response.user.accessToken);
        router.push('/inicio');
      })
      .catch(e => {
        alert(`Credenciales no validas`);
      })
  }

  return (
    <Layout >Login
      <AppShell>
        <Container size={300} px={0}>
          <h1>Iniciar sesion</h1>

          <TextInput label="Ingresa tu E-mail" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />

          <PasswordInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            description="Password must include at least one letter, number and special character"
            value={pass} onChange={(e) => setPass(e.target.value)}
            withAsterisk
          />

          <br></br>
          <Button color="violet" variant="outline" onClick={onLogin} >
            Iniciar sesion
          </Button>
          <p></p>
          <Link href='/registro'>
            <Button color="violet" variant="outline">
              Registrarse
            </Button>
          </Link>

        </Container>
      </AppShell>

    </Layout>
  )
}

export default Login