/**class that contains page header and condition to show pages, when you have a registered session */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import store from '../utils/store'
import { useRouter } from 'next/router'


const Layout = ({children, tituloPestaña, isPrivate = false }) => {
  const router = useRouter();
    const [show, setShow] = useState(false);

    useEffect(() => {
        start()
    })

    function start() {
        const usuario = store.getUsuario();
        console.log(`isPrivate :: ${isPrivate}`);
        if (isPrivate) {
            if (!usuario) {
                router.replace('/');
            } else {
                setShow(true)
            }
        } else {
            if (usuario) {
                router.push('/inicio')
            } else {
                setShow(true)
            }

        }
    }
  return (
    <div>
      <Head>
        <title>
          BMI-{tituloPestaña}
        </title>
      </Head>
      <main>
            {show ? children : <h2> Cargando ... </h2>}
        </main>
  
    </div>
  )
}


export default Layout
