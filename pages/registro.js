import React from 'react'
import { useState } from 'react'
import { Button, Input, TextInput, Container, AppShell, PasswordInput } from '@mantine/core'
import firebase from '../firebase/firebase';
import Layout from '../components/Layout';
import {useRouter} from 'next/router'
const Registro = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    nombre: '',
    apellido: '',
    email: '',
    pass: ''
  });

  function onHandleChange(e) {
    let form = { ...input };
    form[e.target.name] = e.target.value;
    setInput(form);
  }

  async function signUp() {
    // validations

    const response = await firebase.auth.crearUsuario(input.email, input.pass);
    router.push('/inicio');
    alert('tooodo bien');
  }

  return (
    <Layout isPrivate={false}>
      <AppShell>
        <Container size={300} px={0}>
          <h1>Registrarse.</h1>
          <TextInput name='nombre' label="Ingresa Nombre" placeholder="Nombre" onChange={e => onHandleChange(e)} />
          <TextInput name='apellido' label="Ingresa Apellido" placeholder="Apellido" onChange={e => onHandleChange(e)} />


          <TextInput name='email' label="Ingresa E-mail" placeholder="E-mail" onChange={e => onHandleChange(e)} />
          <PasswordInput
            name='pass'
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            onChange={e => onHandleChange(e)} />

          <br></br>

          <Button color="violet" variant="outline" onClick={signUp}>
            Registrarse
          </Button>
        </Container>
      </AppShell>




    </Layout>
  )
}


export default Registro