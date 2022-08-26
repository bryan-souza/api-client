import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Carrossel from '../components/carrossel';
import Informacoes from '../components/informacoes';

export default function Home() {
  return (
    <div >
      <CssBaseline />
      <Head>
        <title>Age of Empires II</title>
      </Head>

      <Carrossel />
      <Informacoes />
      <div id="root">
      </div>
    </div>
  )
}