import React from 'react'

import Head from 'next/head'
import Appsh from './Appsh'



const Layout = ({children,tituloPaginas, tituloPestaña}) => {

 

  return (
    <div>
      <Head>
        <title>
          BMI-{tituloPestaña}
        </title>
      </Head>
   <Appsh tituloPagina={tituloPaginas}/>
   {children}
  
    </div>
  )
}


export default Layout