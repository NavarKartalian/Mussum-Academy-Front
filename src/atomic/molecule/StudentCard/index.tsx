import { Flex, Text } from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

import { useDeleteStudentMutation } from '../../../generated/generated'
import { CustomButton } from '../../atom/CustomButton'

interface StudentCardProps {
  text: string
  id: string
}

export function StudentCard({ text, id }: StudentCardProps) {
  const [deleteStudent] = useDeleteStudentMutation()

  async function handleDeleteStudent(id: string) {
    await deleteStudent({
      variables: {
        input: {
          id,
        },
      },
      refetchQueries: ['getStudents'],
    })
  }

  return (
    <Flex
      w="100%"
      p="4"
      border="1px solid"
      borderColor="gray.600"
      justifyContent="space-between"
      rounded="lg"
      alignItems="center"
    >
      <Text>{text}</Text>

      <CustomButton
        fontSize="12px"
        color="white"
        bg="transparent"
        _hover={{ bg: 'transparent', color: 'red.500' }}
        _focus={{ color: 'red.500' }}
        py="0"
        onClick={() => handleDeleteStudent(id)}
      >
        <FaTrashAlt size={16} />
      </CustomButton>
    </Flex>
  )
}
