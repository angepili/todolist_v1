import React, { useEffect, useContext } from 'react';
import { Context } from '../TodoApp';

const TodoItem = ( props : any ) => {

    const { state, dispatch } = useContext(Context);
    const { id, title } = props;

    return <div>
            <p>{id} <strong>{title}</strong></p>
        </div>
}

export default TodoItem;