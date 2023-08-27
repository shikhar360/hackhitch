
import Homepage from '@/components/home/page'

import Head from 'next/head';

export default function Home() {
  return (
    <main className=" w-full min-h-screen"> 
    <Head>
        <title>HackHitch</title>
        <meta name="description" content="Made with 💜 by Shikhar , Kamal" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="img/a.png" />
      </Head> 
     <Homepage/>
    
    </main>
  )
}
