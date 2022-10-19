import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Container, AppShell ,Card,Group,Text,Image,Center} from '@mantine/core'
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
  <Layout>
    <AppShell 
    sx={(theme) => ({ backgroundColor: '#C6EBC5' })}>
      <Container size={400} px={0} >
        <Card shadow="sm" p="lg" radius="md" withBorder
        style={{ 
          width: 400, 
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 300,
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
        <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Iniciar Sesion</Text>
        <TextInput label="Ingresa tu E-mail" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            value={pass} onChange={(e) => setPass(e.target.value)}
        />
        <Group position="center" mt="md" mb="xs">
        <br></br>
        <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} onClick={onLogin} >
          Iniciar sesion
        </Button>
        <p></p>
        <Link href='/registro'>
          <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })}>
              Registrarse
          </Button>
        </Link>
        </Group>
        </Card>
      </Container>
    </AppShell>
  </Layout>
  )
}

export default Login