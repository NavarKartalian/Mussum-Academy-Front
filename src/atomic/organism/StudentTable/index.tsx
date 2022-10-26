import { Flex, useDisclosure } from '@chakra-ui/react'

import { useGetStudentsQuery } from '../../../generated/generated'
import { StudentCard } from '../../molecule/StudentCard'
import { StudentHeader } from '../../molecule/StudentHeader'
import { StudentModal } from '../StudentModal'

export function StudentTable() {
  const { data } = useGetStudentsQuery()
  const students = data?.students.nodes

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex maxW="1240px" w="100%" direction="column" gap="8">
      <StudentHeader openModal={onOpen} />

      {students?.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          text={student.name}
        />
      ))}

      <StudentModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
