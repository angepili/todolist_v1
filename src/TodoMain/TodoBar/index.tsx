import React, { useContext } from 'react'
import { Context } from '../TodoApp';

import { Row, Col, Badge } from 'antd';

const TodoBar = () => {

    const { state, dispatch } = useContext(Context);
    const total = state.items.length;

    return <Row>
                <Col span={4}>
                    <h1 style={{display: 'inline-block',fontWeight: 'bold',marginRight:6,fontSize: 24}}>TodoList</h1>
                    <Badge count={total} style={{marginTop: -4}} />
                </Col>
            </Row>

}

export default TodoBar;