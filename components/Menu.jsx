import React from "react";
import styled from "styled-components/native";

const Backgound = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
`
const Btn = styled.TouchableOpacity`
    background-color: rgb(60,58,58);
    padding: 10px;
    border-radius: 20px;
    opacity: 0.7;
    align-items: center;
    justify-content: center;
    height: 20%;
    box-sizing: border-box;
    `
const BtnWrapper = styled.View`
    height: 50%;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
`
const BtnText = styled.Text`
    font-size: 20px;
    opacity: 1;
    color: white;
`
const Icon = styled.Image`
    width: 55%;
    height: 30%;
    margin-bottom: 10%;
`
const Header = styled.Text`
    font-size:  35px;
    color: white;
    font-weight: bold;
    margin-bottom: 5%;
`

export default function Menu(){
     const image =require('../assets/qwert.jpg');
    return(
        <Backgound source={image}>
            <Icon source={require('../assets/loading.png')}/>
            <Header>QUIZ GAME</Header>
            <BtnWrapper>
                <Btn>  
                    <BtnText>Start JS basics quiz</BtnText>
                </Btn>
                <Btn>
                    <BtnText>Start CSS basics quiz</BtnText>
                </Btn>
                <Btn>
                    <BtnText>Previous results</BtnText>
                </Btn>
            </BtnWrapper>
        </Backgound>
    );
}