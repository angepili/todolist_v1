import React, { useReducer, createContext } from 'react'
import Reducer from './Reducer';
import { State } from './types';

const initialState = {
    items : [],
    isLogged: false,
    mode : {
        type : 'add',
        id : null
    }
}

export const Context = createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null})

const TodoApp: React.FC = ( { children } ) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>
        { children }
    </Context.Provider>
}


export default TodoApp