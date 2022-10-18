/** class that contains the menu with the options to choose */

import React from 'react'
import Link from 'next/link'
import {AppShell,Button,Stack,Navbar ,Header ,Title, MediaQuery, Burger,opened,theme,Text,useMantineTheme} from '@mantine/core';
import store from '../utils/store'
import {useRouter} from 'next/router'
import { useState } from 'react';
const Appsh = ({ children, tituloPagina }) => {

  const router = useRouter();
/**  @params function to log out, with path to start*/
  function onLogOut() {
    store.deleteUsuario();
    router.push('/');
  }

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell

    styles={{
      main: {
        background: '#FFFFFF',
      },
    }}
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={ 
    <Navbar  p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} sx={(theme) => ({ backgroundColor: '#FFFFFF' })}>
      
         <Stack sx={(theme) => ({ backgroundColor: '#FFFFFF' })}>
           <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} radius="lg" size="md" compact ><Link href='/imc'>Calcular IMC</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} radius="lg" size="md" compact ><Link href='/calcular'>Calculo dietetico</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} radius="lg" size="md" compact >Tabla</Button>
           <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} radius="lg" size="md" compact ><Link href='/buscar'>Buscar Alimento</Link></Button>
           <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),},})} radius="lg" size="md" compact  onClick={onLogOut}>Cerrar sesión</Button>
         </Stack>
    </Navbar>
    }
      padding="md"
    header={
    <Header height={70} p="md"
    sx={(theme) => ({ backgroundColor: '#FFFFFF' })}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text color='#A1C298'  size="xl" transform="uppercase">{tituloPagina}</Text>
      </div>
    </Header>}
    
  >
   {children}     
    </AppShell>

  )
}

export default Appsh