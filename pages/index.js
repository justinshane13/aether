import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '@/comps/Hero'
import Link from 'next/link'
import LearnMore from '@/comps/LearnMore'
import Banner from '@/comps/Banner'
import SPDPRKHighlight from '@/comps/SPDPRKHighlight'
import Sectors from '@/comps/Sectors'
import Company from '@/comps/Company'
import Upgrade from '@/comps/Upgrade'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPDPRK</title>
        <meta name="keywords" content="SPDPRK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Banner />
        <SPDPRKHighlight />
        <Sectors />
        <Company />
        <Upgrade />
      </main>
    </>
  )
}
