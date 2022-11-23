import {Alert} from "react-native";
import {supabaseClient} from "../supabase/supabase";

export const getJsQuestions = async () => {
  let {data: jsQuestions, error} = await supabaseClient
    .from('jsQuestions')
    .select('*');
  return jsQuestions;
}

export const getCssQuestions = async () => {
  let {data: cssQuestions, error} = await supabaseClient
    .from('cssQuestions')
    .select('*')
  return cssQuestions;
}


export const saveRecord = async (text, correctAnswers, type)=> {
  if(text.length == 0){
    Alert.alert("To save score: input user name");
  } else {
    console.log("qwdesfefw")
  const {  } = await supabaseClient
  .from('usersScore')
  .insert([
    {nickname: text, score: correctAnswers, type: type},
  ],
  )
}
}

export const getUsersScore = async () => {
  let {data: usersScore, error} = await supabaseClient
    .from('usersScore')
    .select('*')
  return usersScore;
}