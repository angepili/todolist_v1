import React, { useContext } from 'react';
import { Context } from '../TodoApp';
import TodoItem from '../TodoItem';

const TodoList = () => {

    const { state, 
        // dispatch 
    } = useContext ( Context );
    const { items } = state;

    return <>{!!items.length && items.map ( (item,index) => <TodoItem key={index} {...item} /> )}</>

}

export default TodoList