import React, {useContext } from 'react';
import { Type } from '../Main/types';
import { Context } from '../Main';
import { Card, Row, Col, Button } from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Styles }  from '../../style';

const TodoItem = ( props : any ) => {

    const { 
        // state, 
        dispatch } = useContext(Context);
    const { 
        id, 
        title, 
        // description 
    } = props;

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
                    <Col span={20} xs={16}>
                        <p style={Styles.TodoItemTitle}>{title}</p>
                    </Col>
                    <Col span={4} xs={8}>
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