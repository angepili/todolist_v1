import React, { useContext } from 'react'
import { Context } from '../TodoApp';

import { Badge } from 'antd';

const TodoBar = () => {

    const { state, dispatch } = useContext(Context);
    const total = state.items.length;

    return <Badge count={total} />

}

export default TodoBar;