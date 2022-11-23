import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import Loading from "../components/Loading";
import { getUsersScore } from "../functions/getJsQuestions";
import { setUsersScore } from "../redux/gameSlice";
import UserScoreField from "../components/UserScoreField";
import { exitUsersScore } from "../redux/gameSlice";

const Backgound = styled.ImageBackground`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`
const GoBack = styled.TouchableOpacity`
    flex:0.05;
    background-color: black;
    width: 50%;
    opacity: 0.8;
    border: 3px solid black;
    border-radius: 10px;
    heigth: 100px;
    justify-content: center;
    align-items: center;
    margin-right: 70%;
`
const BtnText = styled.Text`
    font-weigth: bold;
    font-size: 20px;
    color: white;
`
export default function UsersScore({navigation}){
    const usersScore = useSelector(state => state.createGame.usersScore);
    const image = require('../assets/qwert.jpg');
    const [isLoading, setIsLoading] = React.useState(true);
    const dispatch = useDispatch();
    React.useEffect(() => {
        getUsersScore()
        .then(res => {
        dispatch(setUsersScore(res));
        console.log(res)})
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    },[])
    return isLoading ? (<Loading/>) :
    (
        <Backgound source={image}>
            <GoBack onPress={() =>{
                dispatch(exitUsersScore())
                navigation.goBack()}}>
                <BtnText>
                    Go back
                </BtnText>
            </GoBack>
            <UserScoreField/>
        </Backgound>
    );
}