import React, { useEffect, useContext } from 'react';
import { Type } from '../TodoApp/types';
import { Context } from '../TodoApp';
import { Card, Row, Col, Button, Radio } from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Styles }  from './../../style';

const TodoItem = ( props : any ) => {

    const { state, dispatch } = useContext(Context);
    const { id, title, description } = props;

    const deleteItem = (id:number) : void => {
        dispatch({
            type : Type.Delete,
            payload : {
                id
            }
        })
        return;
    }

    const editItem = (id:number) : void => {
        dispatch({
            type : Type.EditMode,
            payload : {
                id
            }
        })
        return;
    }

    return <Card type="inner" style={Styles.TodoItem}>
                <Row>
                    <Col span={20}>
                        <p
                        style={{
                            fontSize: 24,
                            lineHeight: 1.5,
                            margin: 0
                        }}>
                            {title}
                        </p>
                    </Col>
                    <Col span={4}>
                        <div style={{float: 'right'}}>
                            <Button 
                                type="link" 
                                icon={<EditOutlined />} 
                                size={"large"}
                                onClick={() => editItem(id)}
                            />
                            <Button 
                                type="link" 
                                danger 
                                icon={<DeleteOutlined />} 
                                size={"large"}
                                onClick={() => deleteItem(id)}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
}

export default TodoItem;