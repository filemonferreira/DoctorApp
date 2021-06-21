import React,{ createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';


import api from '../services/api';

 
interface User {
    id: string;
    name: string;
    email: string;
    //avatar?: string;
   
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    telefone: string;
}

interface AuthContextData {
    user: User;
    SignIn: (credentials: SignInCredentials) => Promise<void>;
    SignUp: (credentials: SignUpCredentials) => Promise<Boolean>;
    
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function  AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User);
   
    
    

    async function SignIn({email, password} : SignInCredentials){
        try {
            const schema = Yup.object().shape({
               
                password: Yup.string()
                .required('Password is required')
                .min(6, 'Password is too short - should be 6 chars minimum.'),
                email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
                

            });
            const form = { email, password};
            await schema.validate(form);

            let status = 0;
            const responseApi = await api.post('/sessions', form).catch((err) => {
                if (err.response.status === 400) {
                  status = 400;
                  Alert.alert(err.response.data.message);
                }
              });
    
              if (!responseApi && status === 400) {
                return;
                
              }

              console.log(responseApi?.data.user);

              setUser(responseApi?.data.user);

        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert('Opa', error.message);
            
              }
        }
    }

    async function SignUp({name, email, password, confirmPassword, telefone}: SignUpCredentials) {
        try {
            const schema = Yup.object().shape({
                telefone: Yup.string()
                .required('Phone is required'),
                password: Yup.string()
                .required('Password is required')
                .min(6, 'Password is too short - should be 6 chars minimum.'),
                email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
                name: Yup.string()
                .required('Name is required'),

            });
            const data = {name, email, password, telefone};
            await schema.validate(data);

            if(confirmPassword !== password){
                Alert.alert('different password');
                return false;
            }
            
            let status = 0;
           const responseApi  = await api.post('/users', data).catch((err) => {
            if (err.response.status === 400) {
              status = 400;
              Alert.alert(err.response.data.message);
            }
          });

          if (!responseApi && status === 400) {
            return false;
          }

          return true;
          
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert('Opa', error.message);
                
            }
            return false;
              
        }
    }

    useEffect(() => {
        async function loadUserData(){
            
        }
        loadUserData();
    });
       
    return (
        <AuthContext.Provider 
        value={{
            user: user,
            SignIn,
            SignUp,
         
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};