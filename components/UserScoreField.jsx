import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

const UserScoreContainer = styled.View`
    border: 3px solid black;
    width: 70%;
    height: 80%;
    border-radius: 60px;
    background-color: white;
    align-items: center;
    opacity: 0.8;
    justify-content: space-between;
    margin-top: 5%;
`
const UserInfo = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
const InfoContainer = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
const FlatListContainer = styled.FlatList`
    flex: 1;
    width: 100%;
    height: 100%;
`
const UserScoreField = () => {
    const users = useSelector(state => state.createGame.usersScore);
    return (
        <InfoContainer>
            <FlatListContainer
            data={users}
            renderItem={({item}) => 
            <InfoContainer>
                <UserScoreContainer> 
                    <UserInfo>Type: {item.type}</UserInfo>
                    <UserInfo>Name: {item.nickname}</UserInfo>
                    <UserInfo>Score: {item.score}</UserInfo>
                </UserScoreContainer>
            </InfoContainer>
        }
            />
        </InfoContainer>
         )
}

export default UserScoreField;