import Background from '@/components/Background'
import Topbar from '@/components/Topbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>AnimeFlix Brasil</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Background className='flex justify-center'>

        <Topbar />

        <Component {...pageProps} />
      </Background>
    </>
  ) 
  
}
