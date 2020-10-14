import React, { useEffect, useContext } from 'react';
import { Context } from '../TodoApp';
import { Card } from 'antd';
import { Styles }  from './../../style';

const TodoItem = ( props : any ) => {

    const { state, dispatch } = useContext(Context);
    const { id, title, description } = props;

    return <Card type="inner" style={Styles.TodoItem}>
                {title}
            </Card>
}

export default TodoItem;