import React, { useContext } from 'react'
import { Context } from '../TodoApp';

const TodoBar = () => {

    const { state, dispatch } = useContext(Context);
    const total = state.items.length;

    return <p>Totale task: { total } </p>

}

export default TodoBar;