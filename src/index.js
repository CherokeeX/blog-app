import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createStore , combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';

const state = {

    blogs : [
        {
            id: 1,
            title: 'Blog Title 1',
            description : 'blog description 1',
            dateAdded : 0
        }
    ],

    auth : {
             userid: 1,
             userName:'Seref Badi',
             email : 'serefb80@gmail.com'

    }
}   
const blogState = [
    {
        id: 1,
        title: 'Blog Title 1',
        description : 'blog description 1',
        dateAdded : 0
    }
];
const blogReducers = (state = blogState,action) => {
    switch (action.type) {
        default : return state;

    }
}
const authReducers = (state=authState,action)=> {
    switch (action.type){
default : return state

    }
};

const authState = [
    
];
const store =createStore(
    combineReducers (
        {
            blogs : blogReducers,
            auth : authReducers
        }
    )
);

console.log(store.getState());






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <AppRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
