import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Vinícius Crisol</h1>
        <h2>@ViniciusCrisol</h2>

        <p>Programador Full Stack em busca de oportunidades 😊</p>

        <ul>
          <li>
            <LocationIcon />
            Franca, SP
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de abril de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>16</strong>
          </span>
          <span>
            <strong>126 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
