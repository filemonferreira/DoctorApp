import React from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputIcon,
  TextInput
} from './styles';

interface Props extends TextInputProps {
    iconName?: React.ComponentProps<typeof Feather>['name'];
    color: string;
 }

export function Input({
    iconName,
    color,
    ...rest
}: Props){
    
  return (
     <Container>
       <InputIcon>
         <Feather 
            name={iconName}
            size={24}
            color={color}
         />
       </InputIcon>  
       <TextInput 
           {...rest}
       />  
     </Container>
  );
}