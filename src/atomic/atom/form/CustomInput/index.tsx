import { Input, InputProps } from '@chakra-ui/react'

type CustomInputProps = InputProps

export function CustomInput({ ...rest }: CustomInputProps) {
  return <Input maxW="320px" {...rest} />
}
