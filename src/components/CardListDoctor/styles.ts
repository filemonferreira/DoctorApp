
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   width: 100%;
   height: 126px;

   background-color: ${({theme}) => theme.colors.title_light};
   flex-direction: row;

   border-radius: 10px;
   margin-top: 10px;
`;

export const PhotoContainer = styled.View`
    justify-content: center;
    align-items: center;

    margin-left: 6px;
    
`;

export const Photo = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 90px;
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

