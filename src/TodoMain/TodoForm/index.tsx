import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../TodoApp';
import { Type } from '../TodoApp/types';

import { Alert, Row, Col, Input, Button } from 'antd';
import { RHFInput } from 'react-hook-form-input';
import { FileAddOutlined } from '@ant-design/icons';

const TodoForm = () => {

    const { state, dispatch } = useContext( Context );

    const initInput = state.mode.type == 'add' ? '' : state.items.find( item => item.id == state.mode.id )?.title

    const [ input, setInput ] = useState(initInput)


    const { reset, register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data:any) : any => {
        const unixTime = Math.floor(Date.now() / 1000);

        dispatch({
            type : Type.Add,
            payload : {
                id: unixTime,
                title: data.item
            }
        })

        reset({
            item: ''
        });

    }

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e, 'I was closed.');
    };

    return <div style={{
                backgroundColor: '#f6f6f6',
                padding: 15        
                }}>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <Row gutter={0}>
                        <Col span={20}>
                            <RHFInput
                            as={<Input size="large" placeholder="Inserisci una nota" prefix={<FileAddOutlined />} allowClear={true} autoComplete={"off"} />}
                            rules={{ required: true }}
                            name="item"
                            register={register}
                            setValue={setInput}
                            defaultValue={input}
                        />
                        </Col>
                        <Col span={4}>
                            <Button htmlType="submit" type="primary" size={"large"} style={{ width: "100%" }}>Aggiungi</Button>
                        </Col>
                    </Row>
                    {errors.item && 
                        <Alert
                            message="Errore"
                            description="Questo campo è obbligatorio"
                            type="error"
                            closable
                            onClose={onClose}
                            style={{marginTop: 10}}
                      />
                    }
                </form>
            </div>
}

export default TodoForm;