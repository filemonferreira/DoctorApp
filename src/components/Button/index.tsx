import React from 'react';
import { useTheme } from 'styled-components';
import {RectButtonProps} from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    loading?: boolean;
}

export function Button({
    title, 
    color, 
    onPress,
    
  
  } : Props){
    const theme = useTheme();

  return (
     <Container
        onPress={onPress}
     >
         <Title>{title}</Title>
     </Container>
  );
}