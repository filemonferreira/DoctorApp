import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;

   padding: 0 24px;
`;

export const Form = styled.View`
    width: 100%;
`;

export const Logo = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;



export const SignUpButton = styled.TouchableOpacity`
    width: 100%;
    
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const SignUpTitle   = styled.Text`
    font-size: ${RFValue(15)}px;

    padding: 10px;
`;






