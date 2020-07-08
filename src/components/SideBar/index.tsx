import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SerachWrappper,
  SaerchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SerachWrappper>
        <SaerchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SerachWrappper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSugestion name='Hermes Caretta' nickname='@hermeshcg' />,
              <FollowSugestion
                name='Rodolfo Mariano'
                nickname='@RodolfoIndio'
              />,
              <FollowSugestion name='Pedro Henrique' nickname='@pedrin' />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />
          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />
          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
