import { createStore } from "redux";

const initialState = {count : 0}


const countReducer =    (state = initialState,action )=>{
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
    
    }

const store = createStore(countReducer);

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
