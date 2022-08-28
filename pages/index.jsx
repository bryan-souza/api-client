import Head from 'next/head';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

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

      <Container>
        <Informacoes civId={4} />
      </Container>
    </Page>
  )
}