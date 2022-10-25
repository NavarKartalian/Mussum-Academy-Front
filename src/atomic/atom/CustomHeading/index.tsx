import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomHeadingProps extends HeadingProps {
  children: ReactNode;
}

export function CustomHeading({ children, ...rest }: CustomHeadingProps) {
  return (
    <Heading
      textTransform='uppercase'
      {...rest}
    >
      {children}
    </Heading>
  );
}