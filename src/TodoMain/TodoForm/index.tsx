import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../TodoApp';
import { Type } from '../TodoApp/types';

import { Alert, Row, Col, Input, Button } from 'antd';
import { RHFInput } from 'react-hook-form-input';
import { FileAddOutlined } from '@ant-design/icons';

const TodoForm = () => {

    const { state, dispatch } = useContext( Context );
    const [ input, setInput ] = useState('')
    let inputValue = state.mode.type == 'add' ? '' : state.items.find( item => item.id == state.mode.id )?.title;
    const buttonLabel = state.mode.type == 'add' ? 'Aggiungi' : 'Modifica'
    const { reset, register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data:any) : any => {
        const unixTime = Math.floor(Date.now() / 1000);

        const type  = state.mode.type == 'add' ? Type.Add   : Type.Edit
        const id    = state.mode.type == 'add' ? unixTime   : state.mode.id

        dispatch({
            type,
            payload : {
                id,
                title : data.item
            }
        })

        if(state.mode.type == 'edit'){
            dispatch({
                type : Type.AddMode,
                payload : {}
            })
        }

        reset({
            item: ''
        });

    }


    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        return;
    };

    return <div style={{
                backgroundColor: '#f6f6f6',
                padding: 15        
                }}>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <Row gutter={0}>
                        <Col span={20} xs={16}>
                            <RHFInput
                            as={<Input size="large" placeholder="Inserisci una nota" prefix={<FileAddOutlined />} allowClear={true} autoComplete={"off"} />}
                            rules={{ required: true }}
                            name="item"
                            register={register}
                            setValue={setInput}
                            value={inputValue}
                        />
                        </Col>
                        <Col span={4} xs={8}>
                            <Button htmlType="submit" type="primary" size={"large"} style={{ width: "100%" }}>{buttonLabel}</Button>
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