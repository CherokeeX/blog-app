import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';



const initialState = {count : 0}

const store = createStore((state = initialState,action )=>{
const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy : 1 ;

    switch (action.type){

        case 'INCREMENT': 
        return {
            count: state.count+incrementBy
        }
        case 'DECREMENT':
            return {
                count: state.count-1
            }
            case 'RESET':
            return {
                count: 0
            }
        default : 
        return state

    }

});

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10
    
})

store.dispatch({
    type: 'DECREMENT',
    
    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <AppRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
