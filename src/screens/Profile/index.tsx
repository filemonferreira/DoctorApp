import React,{useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import { Alert, Modal, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { useTheme } from 'styled-components';


import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';


import {
  Container,
  Form,
  SignUpButton,
  SignUpTitle, 
  PhotoContainer, 
  Photo,
  ButtonPhoto,
  ModalContainer,
  ModalContent,
  Title,
  ListItem,
  CategorySelectDoctor,
  CategoryTitle,
  Item,
  ItemTitle
} from './styles';
import { useEffect } from 'react';
import api from '../../services/api';

interface CategoeryProps {
    id: string;
    name: string;

}

export function Profile(){
    const { user } = useAuth();
    const [crm, setCrm] = useState('');
    const [bio, SetBio] = useState('');
    const [Address, setAddress] = useState('');
    const [dataHour, setDataHour] = useState('');
    
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategory] = useState<CategoeryProps[]>(
        [
            {
              "id": "3e6851d7-86f9-422b-900e-6e8f17b67f1d",
              "name": "Cardiologia"
            },
            {
              "id": "a07f3e48-9a7b-4940-a1f2-e55a49d55ea8",
              "name": "Neurologia"
            },
            {
              "id": "3e52eab4-644a-47d0-a4f4-defd1c26ef95",
              "name": "Psiquiatria"
            },
            {
              "id": "4070ea50-48f3-44d8-b0e1-b65560019daf",
              "name": "Ortopedia"
            }
          ]
    );
    const [selectCategory, setSelectCategory] = useState('');
    const [selectNameCategory, setSelectNameCategory] = useState('Category Doctor');


    function handleOpenModal(){
        setOpenModal(true);
    }

    function handleCloseModal(){
        setOpenModal(false);
    }

    const theme = useTheme();
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
   
    
    async function handleSave(){
        try {
            const schema = Yup.object().shape({
               
                selectCategory: Yup.string()
                .required('Category Select is required'),
                dataHour: Yup.string()
               .required('DataHour is required'),
               Address: Yup.string()
               .required('Address is required'),
               bio: Yup.string()
               .required('Bio is required'),
               crm: Yup.string()
               .required('Rcm is required'),
                

            });
            const form = { selectCategory, dataHour, Address, bio, crm};
            await schema.validate(form);
         
            const datas = 
                {
                user_id: user.id,
                crm: crm,
                bio: bio,
                clinicAdress: Address,
                availableAgenda: dataHour,
                category_id: selectCategory

            };
            let status = 0;
            const responseApi = await api.post('/doctors', datas).catch((err) => {
                console.log(responseApi?.data);
                if (err.response.status === 400) {
                  status = 400;
                  Alert.alert(err.response.data.message);
                }
              });
    
              if (!responseApi && status === 400) {
                return;
                
              }
              Alert.alert('sas')
        } catch (error) {
          Alert.alert(error.message)
        }
    }

    function handleSelectCategory(data: CategoeryProps){
            setSelectCategory(data.id);
            setSelectNameCategory(data.name)
            handleCloseModal();
    }

  return (
     <Container>
         <Form>
             <PhotoContainer>
                 <Photo>
                    <Feather 
                    name="user"
                    size={50}
                    color="#fff"
                    />
                    <ButtonPhoto>
                    <Feather 
                    name="camera"
                    size={24}
                    color="#fff"
                    />
                    </ButtonPhoto>
                 </Photo>
                 
             </PhotoContainer>
            
             <Input 
                
                color={theme.colors.backgrand_primary}
                 placeholder="CRM"
                onChangeText={setCrm}
                value={crm}
                 autoCorrect={false}
                 autoCapitalize="none"
            /> 
             <Input 
                
                color={theme.colors.backgrand_primary}
                 placeholder="Bio"
                onChangeText={SetBio}
                value={bio}
                autoCorrect={false}
                autoCapitalize="none"
            />   
            
            <Input 
                
                color={theme.colors.backgrand_primary}
                 placeholder="Address"
                 onChangeText={setAddress}
                 value={Address}
                 autoCorrect={false}
                 autoCapitalize="none"
            />

            <Input 
                
                color={theme.colors.backgrand_primary}
                 placeholder="opening hours"
                 onChangeText={setDataHour}
                 value={dataHour}
                 autoCorrect={false}
                 autoCapitalize="none"
            />    
             
            
              <CategorySelectDoctor
               onPress={handleOpenModal}
              >
                  <CategoryTitle>{selectNameCategory}</CategoryTitle>
                  <Feather 
                    name="chevron-down"
                    size={18}
                    color="#000"
                    />
              </CategorySelectDoctor>  

            <Button 
                title="Save" 
                onPress={handleSave}
            />

            <SignUpButton onPress={handleGoBack}>
                <SignUpTitle>Sair</SignUpTitle>
            </SignUpButton>
         </Form>
         <Modal
             animationType="slide"
             visible={openModal}
             transparent
            >
                <ModalContainer>
                    <ModalContent>
                        <Title>Select category</Title>
                           {
                               category.map((item: CategoeryProps) => (
                                <Item key={item.id} 
                                onPress={() => handleSelectCategory(item)}
                                >
                                <ItemTitle>{item.name}</ItemTitle>
                            </Item>
                               ))
                                
                            
                            }
                        
                        <Button title="Select" 
                         onPress={handleCloseModal}
                        />
                    </ModalContent>
                </ModalContainer>
            </Modal>
     </Container>
  );
}