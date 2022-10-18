/** class that contains the menu with the options to choose */

import React from 'react'
import Link from 'next/link'
import { AppShell, Button, Stack, Navbar, Header, Title } from '@mantine/core';
import store from '../utils/store'
import { useRouter } from 'next/router'
const Appsh = ({ children, tituloPagina }) => {
  const router = useRouter();
/**  @params function to log out, with path to start*/
  function onLogOut() {
    store.deleteUsuario();
    router.push('/');
  }
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ sm: 300, lg: 250, base: 100, }}>
        {
          <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
            <Button variant="light" radius="lg" size="md" compact ><Link href='/imc'>Calcular IMC</Link></Button>
            <Button variant="light" radius="lg" size="md" compact ><Link href='/calcular'>Calculo dietetico</Link></Button>
            <Button variant="light" radius="lg" size="md" compact >Tabla</Button>
            <Button variant="light" radius="lg" size="md" compact ><Link href='/buscar'>Buscar Alimento</Link></Button>
            <Button variant="light" radius="lg" size="md" compact onClick={onLogOut}>Cerrar sesión</Button>

          </Stack>

        }
      </Navbar>

      }

      header={<Header height={60} p="xs">{<Title color="Black" order={1}>{tituloPagina}</Title>}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )
}

export default Appsh