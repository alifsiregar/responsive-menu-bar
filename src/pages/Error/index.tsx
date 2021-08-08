import React from 'react';
import { Container } from './styles';

const Error = (): JSX.Element => (
  <Container>
    <h6>
      Error 404
      {' '}
      <br />
      {' '}
      Page Not Found :(
    </h6>
  </Container>
);

export default Error;
