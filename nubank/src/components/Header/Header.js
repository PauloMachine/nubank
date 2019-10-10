import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import NubankLogo from '~/assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './Header.styles';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={NubankLogo} />
                <Title>Paulo</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
    );
}