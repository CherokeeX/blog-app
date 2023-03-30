import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createStore , combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import { v4 as uuid} from 'uuid';
 
const blogState = [
    {
        id: uuid(),
        title: title,
        description : description,
        dateAdded : dateAdded
    }
];
const blogReducers = (state = blogState,action) => {
    switch (action.type) {
        default : return state;

        }
}

const addBlog = ({title = '', description ='', dateAdded = 0})=> (
    {
        type: 'ADD BLOG',       
    blog : { 
        id: 2,
        title: 'Blog title 2',
        description : 'Blog Description 2',
        dateAdded : 0

    }

    }
)



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
store.subscribe(()=>{console.log(store.getState());
})






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <AppRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
