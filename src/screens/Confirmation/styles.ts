import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const IconSuccess = styled.View`
   width: 72px;
   height: 72px;

   border-radius: 36px;
   justify-content: center;
   align-items: center;

   background-color: ${({theme}) => theme.colors.backgrand_primary};
`;

export const Title = styled.Text`
   font-size: ${RFValue(24)}px;
   font-family: ${({theme}) => theme.fonts.primary_700};
   color: ${({theme}) => theme.colors.title_dark};

   margin-top: 16px;
   margin-bottom: 8px;
`;

export const Description = styled.Text`
   font-size: ${RFValue(12)}px;
   font-family: ${({theme}) => theme.fonts.primary_500};
   color: ${({theme}) => theme.colors.text_detail};
`;

export const ButtonSignIn = styled.View`
   width: 100%;
   padding: 0 24px;

   margin-top: 16px;
`;
