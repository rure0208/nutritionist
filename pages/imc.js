import React from 'react'
import { Center, TextInput , Title,Box ,Group } from '@mantine/core'
import {useForm} from '@mantine/form'
import Layout from '../components/Layout'
import Appsh from '../components/Appsh'


const Imc = () => {
  const form = useForm({
      initialValues:{
        peso: '',
        altura: '',        
        imc: '',
        etiqueta: '',
        color: 'black'
      },
  });

  const Calcular = () => {
    const peso = form.values.peso;
    const altura = form.values.altura;
    const imc = parseFloat(peso)/ (parseFloat(altura)**2)

    let etiqueta = imc < 18.5 ? 'Bajo': imc < 22.9 ? 'Normal': imc < 24.9 ? 'Sobrepeso': 'Obesidad'
    let color = imc < 18.5 ? 'blue': imc < 22.9 ? 'green' : 'red'
    form.setValues({
      imc: imc.toFixed(2).toString(),
      etiqueta: etiqueta,
      color: color
    })
  }

  return (
    <Appsh tituloPagina='Índice de masa corporal'>
    <Layout  tituloPestaña='Imc'>
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => Calcular())}>
        <TextInput
          label="Peso"
          placeholder="Ingresa tu peso"
          {...form.getInputProps('peso')}
        />

        <TextInput
          label="Altura"
          placeholder="Ingresa tu altura"
          {...form.getInputProps('altura')}
        />

        <Group position="center" mt="md">
        <Button variant="light" color="grape" compact type="submit">
           Calcular
        </Button>
        </Group>

        <Center><Title color={form.values.color}>{form.values.etiqueta.toUpperCase()}</Title></Center>
        <Center><Title>{form.values.imc}</Title></Center>
      </form>
      
    </Box>
    </Layout>
    </Appsh>
  )
}

export default Imc