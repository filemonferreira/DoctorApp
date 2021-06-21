import React,{ useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { InputPassword } from '../../components/InputPassword';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Form,
  ForgotPassword,
  ForgotTitle,
  SignUpButton,
  SignUpTitle, 
  Logo, 
  ButtonConatiner,
  ContentButton,
  
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';



export function SignIn(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const navigation = useNavigation();
    const { SignIn } = useAuth();

    function handleOpenSignUp(){
        navigation.navigate('SignUp');
    }   

    async function handleSignIn(){
        try {
           const login = await SignIn({email, password});
            
        } catch (error) {
            
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
                iconName="mail"
                color={theme.colors.backgrand_primary}
                 placeholder="Digite seu E-mail"
                 keyboardType="email-address"
                 autoCorrect={false}
                 autoCapitalize="none"
                 onChangeText={setEmail}
                 value={email}
            />    
            <InputPassword 
                iconName="lock" 
                color={theme.colors.backgrand_primary}
                placeholder="Digite sua senha"
                onChangeText={setPassword}
                value={password}
            />

            <ButtonConatiner>
                <ForgotPassword>
                    <ForgotTitle>Esqueceu a senha?</ForgotTitle>
                </ForgotPassword>

                <ContentButton>
                   <Button 
                   title="Entrar"
                   onPress={handleSignIn}
                   />
                </ContentButton>    
            </ButtonConatiner>
                    
           

            <SignUpButton onPress={handleOpenSignUp}>
                <SignUpTitle>Ainda não tem cadastro?</SignUpTitle>
            </SignUpButton>
         </Form>
     </Container>
  );
}