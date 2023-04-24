import React  from 'react';
import Head from 'next/head';
import '@/styles/globals.css'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="ar" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
