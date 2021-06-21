import React from 'react';

import {Button } from '../../components/Button';

import {
  Container,
  Header,
  ContainerDetais,
  Detail,
  Photo,
  Name,
  Category,
  City,
  Icon,
  Classification,
  ClassNumber,
  BioContainer,
  BioTitle,
  Description,
  DateAndTime,
  DateTitle,
  DateHour,
  ButtonWhatsapp,
  ButtonText
} from './styles';

export function Details(){
  return (
     <Container>
       <Header></Header>
       <ContainerDetais>
          <Detail>
            <Photo resizeMode="contain" source={{ uri: 'https://github.com/hereisjohnny2.png' }}/>
            <Name>Joao de abreu</Name>
            <Category>Psicologo</Category>
            <City>Fortaleza-Ce</City>
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
            <ClassNumber>4.5</ClassNumber>    
          </Classification>
          </Detail>
       </ContainerDetais>

       <BioContainer>
         <BioTitle>Bio</BioTitle>
         <Description>
         Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
         </Description>

         <DateAndTime>
           <DateTitle>Horário de atendimento</DateTitle>
           <DateHour>Seg. a Sex. das 08:00 às 18:00</DateHour>
         </DateAndTime>
       </BioContainer>

       <ButtonWhatsapp>
         <Button title="Whatsapp"/>
       </ButtonWhatsapp>


     </Container>
  );
}