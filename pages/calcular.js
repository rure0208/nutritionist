/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import Layout from '../components/Layout'
import CalculosBmi from '../helpers/calculosBmi';
import { TextInput, NativeSelect, Card, Image, SimpleGrid, Text, Tabs ,Modal,Box,Space,Stack, Center, Group} from '@mantine/core';
import Appsh from '../components/Appsh';
import PorcentajeMacro from '../components/PorcentajeMacro';
import KilosMacro from '../components/KilosMacro';




const Calcular = () => {  
  /**Creation and declaration of variables*/
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState("");
  const [fa, setFa] = useState("");
  const [formula, setFormula] = useState("");
  const [geb, setGeb] = useState(0.0);
  const [gett, setget] = useState(0.0);
  return (
  <Layout  tituloPestaña='Calcula' isPrivate={true}>
    <Appsh tituloPagina="calculo dietetico">  
    <div style={{ width: 750, marginLeft: 'auto', marginRight: 'auto' }}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://micarrerauniversitaria.com/wp-content/uploads/2018/03/nutricion-y-dietetica-3.jpg"
            height={200}
          />
        </Card.Section>
        <Group position="center" mt="md" mb="xs">
                    <Text color='#A1C298'  weight={700}>Calculo Dietetico</Text>
                    <Text color='#A1C298'>En este apartado puedes obtener valores sobre las necesidades energéticas del paciente por medio del calculo dietetico. 
                    Solamente necesitamos llenas algunos datos importantes sobre la persona, como lo son el sexo, edad, peso, estatura
                     y actividad física.</Text>
                  </Group>
        <SimpleGrid cols={3}>
          <TextInput
            placeholder="Ingrese su peso"
            label="Peso (kg)"
            /** Assignment of value to the variable*/
            onChange={(event) => setPeso(event.currentTarget.value)}
            id='w'
          />
          <TextInput
            placeholder="Ingrese su altura"
            label="Altura (cm)"
            id='h'
            /** Assignment of value to the variable*/
            onChange={(event) => setAltura(event.currentTarget.value)}
          />
          <TextInput
            placeholder="Edad"
            label="Edad"
            id='e'
            /** Assignment of value to the variable*/
            onChange={(event) => setEdad(parseFloat(event.currentTarget.value))}
          />

          <NativeSelect
            label="Seleccione el género"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Masculino', 'Femenino']}
            value={genero}
                /** Assignment of value to the variable*/
            onChange={(event) => setGenero(event.currentTarget.value)}
          />
          <NativeSelect
            label="Seleccione el factor de actividad"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Vigoroso']}
            value={fa}
            /** Assignment of value to the variable*/
            onChange={(event) => setFa(event.currentTarget.value)}
          />
          <NativeSelect
            label="Seleccione la formula"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Harries', 'OMS', 'OWEN', 'Valencia', 'Mifflin']}
            value={formula}
            /** Assignment of value to the variable*/
            onChange={(event) => setFormula(event.currentTarget.value)}
          />
        </SimpleGrid>
        <Space h="xs" />
        <Group position='center'>
        {/** Button where you access the operations*/}
        <CalculosBmi formula={formula} setGeb={setGeb} genero={genero} peso={peso} altura={altura} edad={edad} fa={fa} setget={setget} />
        </Group>
        <Space h="xs" />
          {/** Printing gett and geb variables*/}
          
          <Center><Text color='#FF884B'>G.E.B: {gett.toFixed(2)} {formula}</Text></Center>
          <Center><Text color='#FF884B'> G.E.T/F.A: {geb.toFixed(2)} {formula}</Text></Center>

          <Stack>

        <Space h="xs" />
            <Tabs defaultValue="porcentaje">
                <Tabs.List>
                    <Tabs.Tab value="porcentaje"  >Porcentaje</Tabs.Tab>
                    <Tabs.Tab value="kilos"  >G/Kg</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="porcentaje" pt="xs">
                    <PorcentajeMacro kcal={geb} pesoMacro={peso}/>
                </Tabs.Panel>

                <Tabs.Panel value="kilos" pt="xs">
                    <KilosMacro kcal={geb} pesoMacro={peso} />
                </Tabs.Panel>
            </Tabs>
        </Stack>
      </Card>
      </div>
     
      </Appsh>
    </Layout>
 
     )
}

export default Calcular