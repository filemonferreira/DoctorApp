import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   flex: 1;
`;

export const Header = styled.View`
   width: 100%;
   height: 216px;
  
   justify-content: flex-end;
   background-color: ${({theme}) => theme.colors.backgrand_primary};
`;

export const ContainerDetais = styled.View`
   width: 100%;
    padding: 0 10px;

    position: absolute;
   margin-top: 90px;
`;

export const Detail = styled.View`
   width: 100%;
   height: 209px;
   
   border-radius: 10px;
   background-color: ${({theme}) => theme.colors.title_light};

   border-width: 2px;
   border-color: ${({theme }) => theme.colors.backgrand_primary};
   align-items: center;
`;

export const Photo = styled.Image`
   width: 90px;
   height: 90px;
   border-radius: 100px;

   margin-top: -30px;

   
`;

export const Content = styled.View`
    flex: 1;
    margin-left: 14px;
    
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_500 };
    color: ${({theme}) => theme.colors.title_dark};

    margin-top: 8px;
`;

export const Category = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_400 };
    color: ${({theme}) => theme.colors.title_dark};

`;

export const City = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_400 };
    color: ${({theme}) => theme.colors.title_dark};

    
`;

export const Classification = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    margin-right: 5px;
    color: ${({theme}) => theme.colors.main};
    
`;

export const ClassNumber = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_400 };
    color: ${({theme}) => theme.colors.title_dark}
`;

export const BioContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
           
           paddingBottom: 30
         }
})`
   margin-top: 100px;
   padding: 0 16px;
`;

export const BioTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.primary_700 };
    color: ${({theme}) => theme.colors.title_dark};
    margin-bottom: 10px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.primary_500 };
    color: ${({theme}) => theme.colors.title_dark};
`;

export const DateAndTime = styled.View`
    width: 100%;
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.backgrand_primary};
    border-radius: 10px;
    padding: 10px;

    margin-top: 25px;

`;

export const DateTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_700 };
    color: ${({theme}) => theme.colors.title_dark};

    
`;

export const DateHour = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_400 };
    color: ${({theme}) => theme.colors.title_dark};
`;

export const ButtonWhatsapp = styled(RectButton)`
  padding: 0 24px;
    
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.primary_700 };
    color: ${({theme}) => theme.colors.title_light};
`;





