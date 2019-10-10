import React from 'react';

import Header from '~/components/Header/Header';
import Tabs from '~/components/Tabs/Tabs'

import { Container } from './Main.styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
