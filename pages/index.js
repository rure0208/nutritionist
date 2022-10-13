import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {TextInput,Button,PasswordInput,Checkbox ,Group ,Box, Card} from '@mantine/core';
import React, { Children } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
 
    <Box sx={{ maxWidth: 300 }} mx="auto" position="start">
      
     <Card   shadow="sm"
      p="xl"
      component="a"
      position="center">
     <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          
        />
        <PasswordInput 
          withAsterisk
          label="Contraseña"
          
          
        />

        <Checkbox
          mt="md"
          label="Recordar Credenciales"
          
        />

        <Group position="right" mt="md">
        <Button variant="light" radius="md" size="md" compact>
      <Link href="./calcular">Iniciar Sesion</Link>
    </Button>
        </Group>
     </Card>
      
    </Box>

      
  

   
    
    </div>
  )
}
