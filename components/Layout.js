import React from 'react'

import Head from 'next/head'
import Appsh from './Appsh'



const Layout = ({children, tituloPestaña}) => {
  return (
    <div>
      <Head>
        <title>
          BMI-{tituloPestaña}
        </title>
      </Head>
   
   {children}
  
    </div>
  )
}


export default Layout