/** class with the form to register, with the help of the firebase class */
import React from 'react'
import { useState } from 'react'
import { Button, Input, TextInput, Container, AppShell, PasswordInput,Card,Center,Image,Text, Group } from '@mantine/core'
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
    alert('Te has registrado con éxito, ahora debes iniciar sesión');
  }

  return (
    <Layout isPrivate={false}>
      <AppShell sx={(theme) => ({ backgroundColor: '#C6EBC5' })}>
        <Container size={400} px={0}>
        <Card shadow="sm" p="lg" radius="md" withBorder
        style={{ 
          width: 400, 
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 450,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '40%',
          left: '50%',
        }}>
          <Card.Section>
          <Center>
          <Image
            src="https://www.logogenio.es/download/preview/medium/10962077"
            height={60}
            width={60} 
          />
          </Center>
        </Card.Section>
        <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Registrarse</Text>
          <TextInput name='nombre' label="Ingresa Nombre" placeholder="Nombre" onChange={e => onHandleChange(e)} />
          <TextInput name='apellido' label="Ingresa Apellido" placeholder="Apellido" onChange={e => onHandleChange(e)} />
          <TextInput name='email' label="Ingresa E-mail" placeholder="E-mail" onChange={e => onHandleChange(e)} />
          <PasswordInput
            name='pass'
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            onChange={e => onHandleChange(e)} />
          <br></br>
          <Group position='center'>
            <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} onClick={signUp}>
              Registrarse
            </Button>
          </Group>
          
          </Card>
        </Container>
      </AppShell>
    </Layout>
  )
}


export default Registro