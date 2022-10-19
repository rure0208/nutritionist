import { Group, TextInput, Button, Card, AppShell, Stack, Table } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import Appsh from '../components/Appsh';
import Layout from '../components/Layout';
//karen Meza

const Buscar = () => {
    /**Creation and declaration of variables*/
    const [search, setSearch] = useState('');
    const [entradaFilter, setEntradaFilter] = useState([]);
    /**connection with firebase*/
    const busqueda = async() => {
        const url = 'https://alimentos-b401e-default-rtdb.firebaseio.com/SMAE.json'
        const respuesta = await fetch(url)
        const entradas = await respuesta.json()
        /**firebase data return*/
        setEntradaFilter(entradas.filter(entrada => {
            return entrada.Alimento.toLowerCase().includes(search.toLowerCase());
        }));
        console.log(entradaFilter);
    }
    /**Food Finder View */
    return ( 
    <Layout tituloPestaña = 'Buscador' isPrivate = { true }>
        <Appsh tituloPagina = 'Buscador alimentos'>    
        <Stack sx = {
            (theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 }) } >
        <Group>
            <TextInput label = "¿Qué deseas buscar?"
                        placeholder = ""
                        id = "busca"
                        value = { search }
                        onChange = {(event) => setSearch(event.currentTarget.value) }
            /> 
            
        </Group> 
        <Group><Button onClick = { busqueda } sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': {backgroundColor: theme.fn.darken('#A1C298', 0.05),}, })} > Buscador </Button> </Group>
        
        <Table>
        <thead>
        <tr>
        <th > Alimento </th> 
        <th > Categoría </th>
        <th > Energia </th>
        <th > Fibra </th> 
        </tr> </thead> 
        <tbody>
        
        <td> {
            entradaFilter.map((entrada, index) => {
                return ( <p key = { index } > { entrada.Alimento } </p>
                )
            })}
        </td> 
        <td> {
            entradaFilter.map((entrada, index) => {
                return ( <p key = { index } > { entrada.Categoría} </p>
                )
            })
        } 
        </td>  
        <td> {
            entradaFilter.map((entrada, index) => {
                return ( <p key = { index } > { entrada.EnergíaKcal } Kcal</p>
                )
            })
        } 
        </td>  
        <td> {
            entradaFilter.map((entrada, index) => {
                return ( <p key = { index } > { entrada.Fibra } g</p>
                )
            })
        } 
        </td>
        </tbody> 
        </Table> 
        </Stack>    
       </Appsh>
    </Layout>
    )
}
export default Buscar