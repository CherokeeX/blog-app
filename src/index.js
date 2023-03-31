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

const removeBlog = ({id})=> (
    {
        type: 'REMOVE',
        id : id
    }
)

const  editBlog= (id , updates)=> ({
type : 'EDIT_BLOG',
id ,
updates

})
const blogState = [];

const blogReducers = (state = blogState,action) => {
    switch (action.type) {
        case  'ADD BLOG' : return [
            ...state, action.blog
        ]
        case 'REMOVE_BLOG' : 

        return state.filter(({id})=>{
            return  id !== action.id
        })

        case 'EDIT_BLOG' : 
        return  state.map ((blog)=>{
            if (blog.id===action.id){
                 return {...blog, ...action.updates}
            } else {
                return blog
            }


        })
        
        


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

const blog1 =store.dispatch (addBlog({title:'Blog title 1' , description: 'Blog Description 1' }));
const blog2 = store.dispatch (addBlog({title:'Blog title 2' , description: 'Blog Description 2', dateAdded: Date.now() }))


store.dispatch(removeBlog({id : blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id , {title: 'Upgrated title info' , description: 'New description....',country: 'TURKEY'}))




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <AppRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
