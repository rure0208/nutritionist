/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import Layout from '../components/Layout'
import CalculosBmi from '../helpers/calculosBmi';
import { TextInput, NativeSelect, Card, Image, SimpleGrid, Text } from '@mantine/core';
import Appsh from '../components/Appsh';


const Calcular = () => {
      /**Creation and declaration of variables*/
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState("");
  const [fa, setFa] = useState("");
  const [formula, setFormula] = useState("");
  const [geb, setGeb] = useState("");
  const [gett, setget] = useState(0.0);
  return (
    <Appsh tituloPagina="Calculo Dietetico">
    <Layout  tituloPestaña='Calcula' isPrivate={true}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://img.freepik.com/vector-premium/control-indice-masa-corporal-bastante-joven-dieta-tratando-controlar-peso-corporal-imc-chica-escala-metodo-medicion-grasas-saludables-escalas-graficas-obesidad-peso-obesidad-extrema_458444-1022.jpg?w=2000"
            height={400}
          />
        </Card.Section>
        <SimpleGrid cols={3}>
          <TextInput
            placeholder="Ingrese su peso"
            label="Peso (kg)"
            /** Assignment of value to the variable*/
            onChange={(event) => setPeso(event.currentTarget.value)}
            id='w'
            withAsterisk
          />
          <TextInput
            placeholder="Ingrese su altura"
            label="Altura (cm)"
            id='h'
            /** Assignment of value to the variable*/
            onChange={(event) => setAltura(event.currentTarget.value)}
            withAsterisk
          />
          <TextInput
            placeholder="Edad"
            label="Edad"
            id='e'
            /** Assignment of value to the variable*/
            onChange={(event) => setEdad(parseFloat(event.currentTarget.value))}
            withAsterisk

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
            label="Seleccione el factor de actividad"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Harries', 'OMS', 'OWEN', 'Valencia', 'Mifflin']}
            value={formula}
            /** Assignment of value to the variable*/
            onChange={(event) => setFormula(event.currentTarget.value)}
          />
        </SimpleGrid>
      </Card>
      {/** Button where you access the operations*/}
      <CalculosBmi formula={formula} setGeb={setGeb} genero={genero} peso={peso} altura={altura} edad={edad} fa={fa} setget={setget} />
           {/** Printing gett and geb variables*/}
      <Text> G.E.B: {gett} {formula}</Text>
      <Text> G.E.T/F.A: {geb} {formula}</Text>
    </Layout>
    </Appsh>
  )
}

export default Calcular