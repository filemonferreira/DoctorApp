import React from 'react';
import {Text, ScrollView, StatusBar} from 'react-native';
import theme from '../../styles/theme';

import { useNavigation } from '@react-navigation/native';

import { InputSearch } from '../../components/InputSearch';
import { CardListDoctor } from '../../components/CardListDoctor';


import {
  Container,
  Header,
  HeaderContent,
  Icon,
  HeaderTitle,
  Title,
} from './styles';

export function Home(){
  const navigation = useNavigation();

  function handleDetails(){
    navigation.navigate('Details');
  }
  return (
     <Container>
       <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
        <Header>
          <HeaderContent>
            <HeaderTitle>Home</HeaderTitle>
          </HeaderContent>
          <InputSearch 
            iconName="search"
            size={24}
            color={theme.colors.title_light}
            placeholder="Buscar Dr."
          />
        </Header>

        <Title>Top Doctor</Title>
        <ScrollView 
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{
           paddingHorizontal: 15,
           paddingBottom: 30
         }}
        >
          <CardListDoctor 
            name="João de Abreu barbosa"
            category="psicólogo"
            city="Fortaleza-Ce"
            photo="https://github.com/hereisjohnny2.png"
            classification={4.5}
            onPress={handleDetails}
          />
          
        </ScrollView>
     </Container>
  );
}