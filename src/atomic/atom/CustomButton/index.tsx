import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

export function CustomButton({ children, ...rest }: CustomButtonProps) {
  return (
    <Button
      bg='blue.600'
      _hover={{ bg: "blue.900" }}
      py='6'
      {...rest}
    >
      {children}
    </Button>
  );
}