import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../TodoApp';
import { Type } from '../TodoApp/types';

import { Row, Col, Input, Button } from 'antd';
import { RHFInput } from 'react-hook-form-input';
import { FileAddOutlined } from '@ant-design/icons';

const TodoForm = () => {

    const [ input, setInput ] = useState('')

    const { state, dispatch } = useContext( Context );

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

    // const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) : void => {
    //     setInput(e.target.value)
    //     console.log(input)
    // }

    return <form onSubmit={handleSubmit(onSubmit)}>
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
                {errors.item && <p>Questo campo è obbligatorio</p>}
            </form>
}

export default TodoForm;