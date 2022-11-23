import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { exitQuiz } from "../redux/gameSlice";
import { saveRecord } from "../functions/getJsQuestions";
import { Alert } from "react-native";

const Global = styled.ImageBackground`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
const FlexContainer = styled.View`
  display: flex;
  background-color: white;
  width: 80%;
  height: 50%;  
  border-radius: 50px;
  border: 5px solid black;
  align-items: center;
  justify-content: space-around;
  opacity: 0.8;
  `
  const Icon = styled.Image`
    height: 70px;
    width: 200px;
`
  const Result = styled.Text`
    font-size: 20px;
    font-weight: bold;
  ` 
  const InputName = styled.TextInput`
    height: 45%;
    width: 80%;
    border: 2px solid black;
    border-radius: 40px;
    padding-left: 10%;
    font-size: 20px;
  `
  const SaveResultBtn = styled.TouchableOpacity`
    border: 1px solid black;
    height: 50%;
    width: 45%;
    border-radius: 40px;
    background-color: rgb(227,223,223);
    justify-content: center;
    align-items: center;
  `
  const InputScoreContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
  `
  const BtnWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  `

const Modal = ({correctAnswers, navigation}) => {
    const image = require('../assets/qwert.jpg');
    const [text, onChangeText] = React.useState("");
    const type = useSelector(state => state.createGame.type)
    const dispatch = useDispatch();
return (
    <Global source={image}>
        <FlexContainer>
            <Icon source={require('../assets/congratulations.png')}/>
            <InputScoreContainer>
                <Result>Score: {correctAnswers}/10</Result>
                <InputName 
                onChangeText={onChangeText}
                value={text}
                placeholder="Input name"
                />
            </InputScoreContainer>
            <BtnWrapper>
              <SaveResultBtn onPress={() => {
                dispatch(exitQuiz());
                navigation.goBack();
              }}>
                <Result>
                  Exit
                </Result>
              </SaveResultBtn>
             <SaveResultBtn onPress={() => {
              saveRecord(text, `${correctAnswers}/10`, type)
              .catch(err => console.log(err));
              onChangeText("");
              }}>
                <Result>
                  Save score
                </Result>
              </SaveResultBtn>
            </BtnWrapper>
        </FlexContainer>
    </Global>
 )
}


export default Modal;