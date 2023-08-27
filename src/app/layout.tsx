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
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_APIKEY as string  }), publicProvider()]
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
