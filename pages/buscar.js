import { Group, TextInput, Button, Card, AppShell,Stack,Table } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import Appsh from '../components/Appsh';
import Layout from '../components/Layout';


const Buscar = () => {
  const [search, setSearch] = useState('');
  const [entradaFilter, setEntradaFilter]=useState([]);

  const busqueda = async () => {
    const url = 'https://alimentos-b401e-default-rtdb.firebaseio.com/SMAE.json'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    setEntradaFilter(entradas.filter(entrada => {
      return entrada.Alimento.toLowerCase().includes(search.toLowerCase());

    }));  
console.log(entradaFilter);
  }
  return (
<Appsh tituloPagina='Buscador'>
    <Layout tituloPestaña='Buscador' isPrivate={true}>
    <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
      <Group>
        <TextInput
          label="¿Qué deseas buscar?"
          placeholder=""
          id="busca"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Button onClick={busqueda}> Buscador</Button>
       
   

      </Group>
      
       
        <Table>
      <thead>
        <tr>
          <th>Alimento</th>
          <th>Carbohidratos</th>
          
        </tr>
      </thead>
      <tbody>
      <td>  {entradaFilter.map((entrada, index)=>{
            return (
              <p key={index}>{entrada.Alimento }</p>
            )
          })
        }</td>
       <td>  {entradaFilter.map((entrada, index)=>{
            return (
              <p key={index}>{entrada.Carbohidratos }</p>
            )
          })}</td> 
        </tbody>
       
    </Table>
      
      </Stack> 
    </Layout>
    </Appsh>
  )
}



export default Buscar