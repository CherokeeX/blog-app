import { createStore , combineReducers } from 'redux';
import blogReducers from '../reducers/blog';
import authReducers from '../reducers/auth';

export default  ()=> {

    const store =createStore(
        combineReducers (
            {
                blogs : blogReducers,
                auth : authReducers
            }
        )
    );
return store;
}


  