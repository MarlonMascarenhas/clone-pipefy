import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159C1" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img src="https://avatars.dicebear.com/4.5/api/male/Marlon%20mascarenhas.svg" alt=""/>
    </Container>
  );
}

export default Card;