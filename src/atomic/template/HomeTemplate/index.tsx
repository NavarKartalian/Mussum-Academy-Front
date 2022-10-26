import { Flex } from '@chakra-ui/react'

import { StudentTable } from '../../organism/StudentTable'

export function HomeTemplate() {
  return (
    <Flex
      w="full"
      alignItems="center"
      direction="column"
      mt="20"
      mb="20"
    >
      <StudentTable />
    </Flex>
  )
}
