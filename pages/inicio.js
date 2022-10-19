import React from 'react'
import Appsh from '../components/Appsh'
import Layout from '../components/Layout'

const Inicio = () => {
  return (

    <Layout tituloPestaña='Inicio' isPrivate={true}>
    <Appsh tituloPagina="Bienvenido" ></Appsh>

    </Layout>
  )
}

export default Inicio