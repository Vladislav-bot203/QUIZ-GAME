import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const Wrapper = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 147, 255);
`
const Icon = styled.Image`
    height: 400px;
    width: 400px;
`
const Header = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: white;
`

export default function Loading({a}){
    const image = require('../assets/qwert.jpg');
    return(
        <Wrapper source={image}>
            <Icon source={require('../assets/loading.png')}></Icon>
            <Header>QUIZ GAME</Header>
            <ActivityIndicator size='large' color='white'/>
        </Wrapper>
    );
}