import React from 'react'
import {Avatar, Button, Input, Text, TextInput, PasswordInput, Container, AppShell, onClick, UnstyledButton, Group } from '@mantine/core'
import registro from './registro'
import Link from 'next/link';



const Login = () => {



  return (

    <div >Login
      <AppShell>
        <Container size={300} px={0}>
          <h1>Iniciar sesion</h1>

         
          <TextInput label="Ingresa tu E-mail" placeholder="Correo electronico" />


          

          <PasswordInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            description="Password must include at least one letter, number and special character"
            withAsterisk
          />

          <br></br>
          <Button color="violet" variant="outline" >
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

    </div>
  )
}

export default Login