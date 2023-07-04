import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Accueil from './accueil'
import Apropos from './apropos'
import Nosservices from './nosservices'
import Portfolio from './portfolio'
import Contact from './contact'
import { Navbar } from 'react-bootstrap'
import Posts from './posts'
import Test from './test'




export default function Home() {
  return (
    <>

      <Accueil />
      <Apropos />
      <Nosservices />
      {/* <Test /> */}
      <Portfolio />
      <Contact />
    </>
  )
}
