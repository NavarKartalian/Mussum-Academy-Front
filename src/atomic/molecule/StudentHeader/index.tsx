import { Flex } from "@chakra-ui/react";

import { AiOutlinePlusCircle } from 'react-icons/ai';

import { CustomButton } from "../../atom/CustomButton";
import { CustomHeading } from "../../atom/CustomHeading";

interface StudentHeaderProps {
  openModal: () => void;
}

export function StudentHeader({ openModal }: StudentHeaderProps) {
  return (
    <Flex
      w='100%'
      justify='space-between'
      alignItems='center'
    >
      <CustomHeading>Alunos</CustomHeading>

      <CustomButton gap='2' onClick={openModal}>
        Novo Aluno
        <AiOutlinePlusCircle size={20} />
      </CustomButton>
    </Flex>
  );
}