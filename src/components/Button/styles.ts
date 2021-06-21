import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
   width: 100%;
   

    background-color: ${({theme}) => theme.colors.backgrand_primary};
    
    padding: 10px;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
`;

export const Title = styled.Text`
     font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_700 };
    color: ${({theme}) => theme.colors.title_light};
`;