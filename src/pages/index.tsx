import Head  from 'next/head';

import { Flex } from '@chakra-ui/react'

import { useCreateStudentMutation, useGetStudentsQuery } from '../generated/generated';
import { HomeTemplate } from '../atomic/template/HomeTemplate';

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
