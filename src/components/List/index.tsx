import React, { useContext } from 'react';
import { Type } from '../Main/types';
import { Context } from '../Main';
import TodoItem from '../Item';

import useItems from './../../hooks/useItems';

const TodoList = () => {

    const { state, dispatch } = useContext ( Context );

    const { items } = state;

    return <>{!!items.length && items.map ( (item,index) => <TodoItem key={index} {...item} /> )}</>

}

export default TodoList