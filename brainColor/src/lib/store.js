import { writable } from "svelte/store"; // writable 스토어 사용을 선언

// 현재 점수
export const score = writable (0);

// 점수 리스트
export const scoreList = writable([
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
]);

/* 몽고디비 insertMany 문장 만들기
db.score.insertMany([
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
]);
*/

// 퀴즈 리스트
export const quizList = writable([
    {//no.1
        question : {
            color : "red", text : "green"
        },
        choice : [
            {color : "green"  , text : "yellow" },
            {color : "pink"   , text : "red"    },
            {color : "blue"   , text : "purple" },
            {color : "yellow" , text : "gray"   },
        ]
    },
    {//no.2
        question : {
            color : "orange", text : "black"
        },
        choice : [
            {color : "black"  , text : "yellow" },
            {color : "red"    , text : "orange" },
            {color : "pink"   , text : "green"  },
            {color : "yellow" , text : "red"    },
        ]
    },
    {//no.3
        question : {
            color : "yellow", text : "blue"
        },
        choice : [
            {color : "blue"   , text : "green"  },
            {color : "purple" , text : "yellow" },
            {color : "yellow" , text : "red"    },
            {color : "red"    , text : "orange" },
        ]
    },
    {//no.4
        question : {
            color : "purple", text : "brown"
        },
        choice : [
            {color : "brown"  , text : "red"    },
            {color : "red"    , text : "purple" },
            {color : "blue"   , text : "green"  },
            {color : "orange" , text : "yellow" },
        ]
    },
    {//no.5
        question : {
            color : "green", text : "gray"
        },
        choice : [
             {color : "gray"   , text : "orange" },
             {color : "blue"   , text : "green"  },
             {color : "yellow" , text : "red"    },
             {color : "purple" , text : "yellow" },
        ]
    },
    {//no.6
        question : {
            color : "black", text : "pink"
        },
        choice : [
             {color : "pink"    , text : "orange" },
             {color : "blue"    , text : "black"  },
             {color : "yellow"  , text : "red"    },
             {color : "purple"  , text : "yellow" },
        ]
    },
    {//no.7
        question : {
            color : "blue", text : "red"
        },
        choice : [
             {color : "red"    , text : "orange" },
             {color : "green"   , text : "blue"  },
             {color : "yellow" , text : "red"    },
             {color : "purple" , text : "yellow" },
        ]
    },
    {//no.8
        question : {
            color : "brown", text : "orange"
        },
        choice : [
             {color : "orange"  , text : "red"    },
             {color : "blue"    , text : "brown"  },
             {color : "yellow"  , text : "yellow" },
             {color : "brown"   , text : "orange" },
        ]
    },
    {//no.9
        question : {
            color : "gray", text : "yellow"
        },
        choice : [
             {color : "yellow" , text : "purple" },
             {color : "red"    , text : "gray"   },
             {color : "gray"   , text : "green"  },
             {color : "purple" , text : "yellow" },
        ]
    },
    {//no.10
        question : {
            color : "pink", text : "purple"
        },
        choice : [
            {color : "purple" , text : "yellow" },
            {color : "gray"   , text : "pink"   },
            {color : "blue"   , text : "green"  },
            {color : "yellow" , text : "red"    },
        ]
    },
]);