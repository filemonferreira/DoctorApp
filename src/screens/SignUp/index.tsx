import React,{useState} from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { useTheme } from 'styled-components';

import { InputPassword } from '../../components/InputPassword';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  Form,
  SignUpButton,
  SignUpTitle, 
  Logo, 
} from './styles';



interface NewUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    telefone: string;
}

export function SignUp(){
    const { SignUp } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telefone, setTelefone] = useState('');

    const theme = useTheme();
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
   
    async function handleRegister(){
        try {
            
           const response = await SignUp({name, email, password, confirmPassword, telefone});
              if(response){
                navigation.navigate('Confirmation');
              }
         
        } catch (error) {
          Alert.alert(error.message)
        }
    }

  return (
     <Container>
         <Form>
             <Logo>
                 <Feather 
                 name="activity"
                 size={100}
                 color="#2EC4B6"
                 />
             </Logo>
            
             <Input 
                iconName="user"
                color={theme.colors.backgrand_primary}
                 placeholder="Nome completo"
                onChangeText={setName}
                value={name}
                 autoCorrect={false}
                 autoCapitalize="none"
            />   
            
            <Input 
                iconName="mail"
                color={theme.colors.backgrand_primary}
                 placeholder="Digite seu e-mail"
                 keyboardType="email-address"
                 onChangeText={setEmail}
                 value={email}
                 autoCorrect={false}
                 autoCapitalize="none"
            />    
             
            <InputPassword 
                iconName="lock" 
                color={theme.colors.backgrand_primary}
                onChangeText={setPassword}
                value={password}
                placeholder="Digite sua senha"
            />

            <InputPassword 
                iconName="lock" 
                color={theme.colors.backgrand_primary}
                placeholder="Repita senha"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                
            />

            <Input 
                iconName="phone"
                 color={theme.colors.backgrand_primary}
                 placeholder="Whatsapp para contato"
                 keyboardType="numeric"
                 onChangeText={setTelefone}
                 value={telefone}
            />  

            <Button 
            title="Cadastrar" 
            onPress={handleRegister}
            />

            <SignUpButton onPress={handleGoBack}>
                <SignUpTitle>Login</SignUpTitle>
            </SignUpButton>
         </Form>
      
     </Container>
  );
}