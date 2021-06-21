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

export const PhotoContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
   
`;

export const Photo = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    padding: 10px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.backgrand_primary};
`;

export const ButtonPhoto = styled.TouchableOpacity`
    position: absolute;
    padding: 5px;
    bottom: 0px;
    right: 1px;
    background-color: ${({theme}) => theme.colors.error};
`;

export const ButtonTitle = styled.Text``;


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

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 24px;
`;

export const ModalContent = styled.View`
    width: 100%;
    height: 400px;

    background-color: #fff;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    padding: 10px;
`;

export const ListItem = styled.FlatList`
    flex: 1;
    
`;

export const CategorySelectDoctor = styled.TouchableOpacity`
    width:100%;

    padding: 10px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.backgrand_primary};

    margin-bottom: 16px;
`;

export const Item = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme}) => theme.colors.text_detail};
    
    border-bottom-width: 1;
    border-bottom-color: ${({theme}) => theme.colors.line};

    padding: 10px;
`;

export const ItemTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.title_light};
`;


export const CategoryTitle = styled.Text``;







