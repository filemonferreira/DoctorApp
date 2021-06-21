import React from 'react';

import {
  Container,
  PhotoContainer,
  Photo,
  Content,
  Name,
  Category,
  City,
  Classification,
  Icon,
  ClassNumber,
} from './styles';

interface Props {
  name: string;
  category: string;
  city: string;
  photo: string;
  classification: number;
  onPress: () => void;
}

export function CardListDoctor({
  name,
  category,
  city,
  photo,
  classification,
  onPress
} : Props){
  return (
     <Container
      onPress={onPress}
     >
        <PhotoContainer>
          <Photo resizeMode="contain" source={{ uri: photo }} />  
        </PhotoContainer> 
        <Content>
          <Name>{name}</Name>
          <Category>{category}</Category>
          <City>{city}</City>
          <Classification>
           <Icon 
            name="star"
            size={16}
            color="#fff"
           />
           <Icon 
            name="star"
            size={16}
            color="#fff"
           />
           <Icon 
            name="star"
            size={16}
            color="#fff"
           />
           <Icon 
            name="star"
            size={16}
            color="#fff"
           />
            <Icon 
            name="star"
            size={16}
            color="#fff"
           />
            <ClassNumber>{classification}</ClassNumber>    
          </Classification>
        </Content>    
     </Container>
  );
}