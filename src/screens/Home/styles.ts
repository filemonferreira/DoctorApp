import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.backgrand_primary};
`;

export const Header = styled.View`
   width: 100%;
   height: 150px;
  

   justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  width: 100%;
  justify-content: center;

  align-items: center;
  margin-bottom: 15px;
`;


export const Icon = styled(Feather)``;

export const HeaderTitle = styled.Text`
   
   font-family: ${({ theme }) => theme.fonts.primary_500};
   font-size: ${RFValue(18)}px;
   color: ${({theme}) => theme.colors.title_light}
`;

export const Title = styled.Text`
   font-size: ${RFValue(18)}px;
   font-family: ${({theme}) => theme.fonts.primary_500};
   color: ${({theme}) => theme.colors.title_light};

   padding: 0 24px;
   margin: 17px 0;
`;
