import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
   flex-direction: row;
   margin-bottom: 8px;
   padding: 0 24px;

   
`;

export const InputText = styled(TextInput)`
    flex: 1;
     height: 44px;
    
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.backgrand_primary};
    color: ${({theme}) => theme.colors.title_light};
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-color: ${({theme}) => theme.colors.title_light};

`;

export const IconContainerLeft = styled.View`
     height: 44px;
    width: 55px;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.backgrand_primary};
    
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-top-width: 2px;
    
    border-color: ${({theme}) => theme.colors.title_light};
`;

export const IconContainerRight = styled.View`
     height: 44px;
    width: 55px;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.backgrand_primary};
    
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    border-top-left-radius: 5px;
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-top-width: 2px;
    
    border-color: ${({theme}) => theme.colors.title_light};
`;
