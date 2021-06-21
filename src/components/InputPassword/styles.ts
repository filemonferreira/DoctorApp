import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.backgrand_primary};
   
   border-radius: 6px;
   flex-direction: row;
   margin-bottom: 15px;
`;

export const IconContainer = styled.View`
    padding: 0 15px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding: 10px;
`;

export const ButtonIcon = styled(RectButton)`
     padding: 0 15px;
    justify-content: center;
    align-items: center;    
`;