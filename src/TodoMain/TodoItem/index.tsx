import React, { useEffect, useContext } from 'react';
import { Context } from '../TodoApp';

const TodoItem = ()=> {
    const { state, dispatch } = useContext(Context);
    return <div>{ JSON.stringify(state,null,2)}</div>
}

export default TodoItem;