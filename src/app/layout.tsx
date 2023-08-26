"use client"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/page'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
 
  polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Head from 'next/head';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [alchemyProvider({ apiKey: 'lNHE8SSqfOyyifdNCKx_h1RIRXDrHew3' }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Hackhitch',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={""}>
      <Head>
        <title>HackHitch</title>
        <meta name="description" content="Made with 💜 by Shikhar , Kamal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/a.png" />
      </Head> 
      <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Navbar/>
        {children}
        </RainbowKitProvider>
    </WagmiConfig>
        </body>
    </html>
  )
}
