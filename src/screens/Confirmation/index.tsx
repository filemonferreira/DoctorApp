import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button'

import {
  Container,
  IconSuccess,
  Title,
  Description,
  ButtonSignIn,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Confirmation(){

  const navigation = useNavigation();

  function handleGoBackSignIn(){
    navigation.navigate('SignIn');
  }
  return (
     <Container>
       <IconSuccess>
          <Feather 
            name="check"
            size={34}
            color="#fff"
          />
       </IconSuccess>

       <Title>Sucesso!</Title>

       <Description>Conta criada com sucesso!</Description>

       <ButtonSignIn>
        <Button title="Login" onPress={handleGoBackSignIn}/>
       </ButtonSignIn>

     </Container>
  );
}