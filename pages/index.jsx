import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Carrossel from '../components/Carrossel';
import Informacoes from '../components/Informacoes';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page>
      <CssBaseline />
      <Head>
        <title>Age of Empires II</title>
      </Head>

      <Carrossel />
      <Informacoes />
    </Page>
  )
}