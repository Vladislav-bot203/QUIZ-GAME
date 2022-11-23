import React from "react";
import styled from "styled-components/native";
import {Text, View} from "react-native";

const Variant = styled.TouchableOpacity`
    flex-direction: row;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    height: 30%;
    box-sizing: border-box;
`
const AnswersWrapper = styled.View`
  height: 50%;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export default function Answer({question, onClickVariant}){
    return(
        <AnswersWrapper flex={1}>
            {
                question.answers.map((text, index) => <Variant key={index} onPress={() => onClickVariant(index)}><Text style={{fontWeight: "bold"}}>{text}</Text></Variant>)
            }
        </AnswersWrapper>
    );
}