import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import {Feather} from '@expo/vector-icons';

import {
  Container,
  InputText,
  IconContainerLeft,
  IconContainerRight,
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    size: number;
    color: string;
    value?: string;
}

export function InputSearch({
    iconName,
    value,
    size,
    color,
    ...rest
}: Props){
    const theme = useTheme();
  return (
     <Container>
         <IconContainerLeft>
             <Feather name={iconName}
                size={size}
                color={color}
            />  
         </IconContainerLeft>
         <InputText 
            autoCorrect={false}
            placeholderTextColor={theme.colors.line}
            {...rest}
            />
             <IconContainerRight>
             <Feather name="x"
                size={24}
                color={theme.colors.title_light}
            />  
         </IconContainerRight>
            

     </Container>
  );
}