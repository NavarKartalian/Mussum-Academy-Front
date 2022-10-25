import { 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay, 
} from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useCreateStudentMutation } from "../../../generated/generated";

import { CustomButton } from "../../atom/CustomButton";
import { CustomInput } from "../../atom/form/CustomInput";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InputProps {
  student: {
    key: string;
    name: string;
  }
}

export function StudentModal({ isOpen, onClose }: StudentModalProps) {
  const [ name, setName ] = useState('');
  const [ key, setKey ] = useState('');

  const [ createStudent ] = useCreateStudentMutation();

  async function handleCreateNewStudent(input: InputProps) {
    if(!name.trim() || !key.trim()) return;

    await createStudent({
      variables: {
        input
      },
      refetchQueries: ['getStudents']
    });

    setKey('');
    setName('');

    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg='gray.900' alignItems='center'>

        <ModalHeader>Crie um novo aluno</ModalHeader>

        <ModalCloseButton />

        <ModalBody 
          display='flex' 
          flexDirection='column' 
          alignItems='center' 
          w='100%'
          gap='4'
        >
          <CustomInput 
            placeholder="Nome" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
          />

          <CustomInput 
            placeholder="Key" 
            maxLength={4}
            onChange={(e) => setKey(e.target.value)} 
            value={key}
          />

          <CustomButton 
            maxW='120px' 
            w='100%' 
            gap='2' 
            my='4' 
            onClick={() => handleCreateNewStudent({ student: { key, name } })}
          >
            Criar
            <AiOutlinePlusCircle size={20} />
          </CustomButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}