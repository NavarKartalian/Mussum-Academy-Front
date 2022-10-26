import Head from 'next/head'

import { HomeTemplate } from '../atomic/template/HomeTemplate'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mussum Academy</title>
      </Head>

      <HomeTemplate />
    </>
  )
}
