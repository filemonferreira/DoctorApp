import React,{useState} from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Input,
  IconContainer,
  ButtonIcon
} from './styles';

interface Props extends TextInputProps {
   iconName: React.ComponentProps<typeof Feather>['name'];
   color: string;
}

export function InputPassword({
   iconName,
   color,
   ...rest
}: Props){
   const [passwordVisible, setPasswordVisible] = useState(true);

   function handlePasswordVisibilityChange(){
      setPasswordVisible(prevState => !prevState);
    }

  return (
     <Container>
         <IconContainer>
         <Feather 
            name={iconName}
            size={24}
            color={color}
         />
         </IconContainer>

         <Input 
         secureTextEntry={passwordVisible}
         {...rest}
         />

         <ButtonIcon onPress={handlePasswordVisibilityChange}>
         <Feather 
            name="eye"
            size={24}
            color={color}
         />
         </ButtonIcon>
     </Container>
  );
}