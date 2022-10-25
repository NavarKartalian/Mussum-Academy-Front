import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {}

export function CustomInput({ ...rest }: CustomInputProps) {
  return (
    <Input 
      maxW='320px'
      {...rest}
    />
  );
}