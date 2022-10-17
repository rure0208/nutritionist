import React from 'react'
import {Button,TextInput, PasswordInput, Container, AppShell } from '@mantine/core'

import Link from 'next/link';
import {useState} from 'react'
import firebaseLogin from '../firebase/firebaseLogin';
import { useRouter } from 'next/router';


const Login = () => {

  const [input, setInput] = useState({
    email: '',
    pass: '',
  });
  const {push}= useRouter()
  const onHandleChange= (e)=> {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    push('/inicio');
    
  }

  async function loginUser() {
    // validations

    const response = await firebaseLogin.auth.loginUsuario(input.email, input.pass);
    
    
    alert('tooodo bien');
  }


  return (

    <div >
      
        <Container size={300} px={0}>
          <h1>Iniciar sesion</h1>

         
          <TextInput label="Ingresa tu E-mail" placeholder="Correo electronico" 
          onChange={ e => onHandleChange(e)}/>


          

          <PasswordInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            onChange={ e => onHandleChange(e)}
          />

          <br></br>
          <Button color="violet" variant="outline" >
            Iniciar sesion
          </Button>
          <p></p>
          <Link href='/registro'>
            <Button color="violet" variant="outline" onClick={loginUser}>
              Registrarse
            </Button>
          </Link>



        </Container>
   

    </div>
  )
}

export default Login