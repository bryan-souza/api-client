import Head from 'next/head';
import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import Carrossel from '../components/Carrossel';
import Informacoes from '../components/Informacoes';
import Page from '../components/Page';
import CivContext from '../components/CivContext';


export default function Home() {
  return (
    <Page>
      <CssBaseline />
      <Head>
        <title>Age of Empires II</title>
      </Head>

      <CivContext>
      <Carrossel />

      <Box
        width={'100%'}
        height={'100%'}
        sx={{ overflowX: 'hidden', overflowY: 'scroll' }}
      >
        <Informacoes />
      </Box>
      </CivContext>
    </Page>
  )
}