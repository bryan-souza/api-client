import Head from 'next/head';
import React from 'react';
import GroupAvatars from '../components/carrossel';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home() {
  return (
    <div >
      <CssBaseline/>
      <Head>
        <title>Age of Empires II</title>
      </Head>

      <GroupAvatars />
      <div id="root">
      </div>
    </div>
  )
}
