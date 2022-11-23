import React from 'react';
import styled from 'styled-components/native';
import {Text, FlatList, View} from 'react-native';
import Answer from '../components/Answer';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer } from '../redux/gameSlice';
import Modal from '../components/Modal';

const Backgound = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const AnswersWrapper = styled.View`
  height: 50%;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const Question = styled.View`
  height: 20%;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px solid black;
  border-radius: 30px;
  margin-top: 10%;
  padding-left: 5px;
  padding-right: 5px;
`;
const Indicator = styled.Text`
  color: white;
  margin-top: 20%;
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
`;

export default function Questions({navigation}) {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.createGame.questions);
  const step = useSelector((state) => state.createGame.step);
  const showModal = useSelector((state) => state.createGame.showModal);
  const correctAnswers = useSelector((state) => state.createGame.correctAnswers);
  const image = require('../assets/qwert.jpg');
  return showModal ? (
      <Modal correctAnswers={correctAnswers} navigation={navigation}/>
    )
     : (
    <Backgound source={image}>
      <Indicator>{step+1}/10</Indicator>
      <Question>
        <Text style={{fontWeight: "bold"}}>{questions[step].question}</Text>
      </Question>
      <AnswersWrapper>
        <Answer question = {questions[step]} onClickVariant={(index) =>
          dispatch(selectAnswer(index))}/>
      </AnswersWrapper>
    </Backgound>
  );
      }  
