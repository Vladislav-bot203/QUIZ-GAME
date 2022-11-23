import { createSlice } from '@reduxjs/toolkit'
import mixArr from '../functions/mixArr';

const initialState = {
  cssQuestions: [],
  jsQuestions: [],
  step: 0,
  correctAnswers: 0,
  questions: [],
  showModal: false,
  type: "",
  usersScore: [],
}

export const createGameSlice = createSlice({
    name: 'generateGame',
    initialState,
    reducers: {
    setCssQuestions: (state, action) => {
        if(initialState.cssQuestions.length == 0){
                state.cssQuestions = [...action.payload];
                console.log("js questions set")
        } else {
            console.log("You have already recived questions");
            }
        },

    setJsQuestions: (state, action) => {
        if(state.jsQuestions.length == 0){
            state.jsQuestions = [...action.payload]
            console.log("css questions set")
        } else {
            console.log("You have already recived questions");
          }
        },

    generateGame: (state, action) => {
        if(action.payload === "jsQuestions"){
            state.questions = mixArr(state.jsQuestions);
            state.type = "jsQuiz";
        } else {
            state.questions = mixArr(state.cssQuestions);
            state.type = "cssQuiz";
        }
    },

    selectAnswer: (state, action) => {
        if((state.step !== 9) && (action.payload == state.questions[state.step].identificator)){
            state.step = state.step + 1;
            state.correctAnswers = state.correctAnswers + 1;
            console.log("correct answer")}
         else if((state.step) !== 9 && (action.payload !== state.questions[state.step].identificator)){
            state.step = state.step + 1;
            console.log("incorrect answer")}
        else if(state.step == 9 && action.payload == state.questions[state.step].identificator) {
            console.log("end");
            console.log("correct answer");
            state.showModal = true;
            state.correctAnswers=state.correctAnswers+1;
        } else{
            console.log("end");
            console.log("incorrect answer");
            state.showModal = true;}
    },
    exitQuiz: (state) => {
            state.questions = [];
            state.showModal = false;
            state.correctAnswers = 0;
            state.step = 0;
            state.type = "";
    },
    setUsersScore: (state, action) => {
        if(initialState.usersScore.length == 0){
                state.usersScore = [...action.payload];
                console.log("usersScore set")
        } else {
            console.log("You have already recived users score");
            }
        },
    exitUsersScore: (state) => {
        state.usersScore = [];
    }
        }
    })

export const {selectAnswer, generateGame, setJsQuestions, setCssQuestions, exitQuiz, setUsersScore, exitUsersScore} = createGameSlice.actions;

const createGameReducer = createGameSlice.reducer;

export default createGameReducer;