import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createStore , combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import { v4 as uuid} from 'uuid';
 

const addBlog = ({title = '', description ='', dateAdded = 0})=> (
    {
        type: 'ADD BLOG',       
    blog : { 
        id: uuid(),
        title: title,
        description : description,
        dateAdded : dateAdded

    }

    }
)


const blogState = [];


const blogReducers = (state = blogState,action) => {
    switch (action.type) {
        case  'ADD BLOG' : return [
            ...state, action.blog
        ]
        default : return state;

        }
}


const  authState = {};


const authReducers = (state=authState,action)=> {
    switch (action.type){
       
default : return state

    }
};


const store =createStore(
    combineReducers (
        {
            blogs : blogReducers,
            auth : authReducers
        }
    )
);
store.subscribe(()=>{console.log(store.getState());
})

store.dispatch (addBlog({title:'Blog title 1' , description: 'Blog Description 1' }))
store.dispatch (addBlog({title:'Blog title 2' , description: 'Blog Description 2', dateAdded: Date.now() }))





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <AppRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
