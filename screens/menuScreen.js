import React from 'react';
import {getCssQuestions, getJsQuestions} from '../functions/getJsQuestions';
import Loading from '../components/Loading';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { setJsQuestions } from '../redux/gameSlice';
import { setCssQuestions } from '../redux/gameSlice';
import { generateGame } from '../redux/gameSlice';
import { exitQuiz } from '../redux/gameSlice';

const Backgound = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: white;
`;
const Btn = styled.TouchableOpacity`
  background-color: rgb(60, 58, 58);
  padding: 10px;
  border-radius: 20px;
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  height: 20%;
  box-sizing: border-box;
`;
const BtnWrapper = styled.View`
  height: 50%;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const BtnText = styled.Text`
  font-size: 20px;
  opacity: 1;
  color: white;
`;
const Icon = styled.Image`
  width: 55%;
  height: 30%;
  margin-bottom: 10%;
`;
const Header = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
  margin-bottom: 5%;
`;
const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const image = require('../assets/qwert.jpg');
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    getJsQuestions()
      .then(res => {
        dispatch(setJsQuestions(res));
        console.log(res);
        })
      .catch(err => console.log(err));

    getCssQuestions()
      .then(res => {
        dispatch(setCssQuestions(res));
        console.log(res);
        })
      .catch(err => {
       console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Backgound source={image}>
      <Icon source={require('../assets/loading.png')} />
      <Header>QUIZ GAME</Header>
      <BtnWrapper>
        <Btn onPress={() => {
          dispatch(generateGame("jsQuestions"))
          navigation.navigate('Questions');
      }}>
          <BtnText>Start JS basics quiz</BtnText>
        </Btn>
        <Btn onPress={() => {
          dispatch(generateGame("cssQuestions"))
          navigation.navigate('Questions')
      }}>
          <BtnText>Start CSS basics quiz</BtnText>
        </Btn>
        <Btn onPress={() =>
          navigation.navigate('UsersScore')
        }>
          <BtnText>Users results</BtnText>
        </Btn>
      </BtnWrapper>
    </Backgound>
  );
};

export default MenuScreen;
