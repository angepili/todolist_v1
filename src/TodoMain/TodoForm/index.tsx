import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../TodoApp';
import { Type } from '../TodoApp/types';

const TodoForm = () => {

    const [ input, setInput ] = useState('')

    const { state, dispatch } = useContext( Context );

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data:any) : any => {
        const unixTime = Math.floor(Date.now() / 1000);

        dispatch({
            type : Type.Add,
            payload : {
                id: unixTime,
                title: data.item
            }
        })

        setInput('');

    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) : void => {
        setInput(e.target.value)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    name="item"
                    value={input}
                    onChange={handleChange}
                    ref={register({ required: true })} 
                />
                <button type="submit">Aggiungi</button>
                {errors.item && <p>Questo campo è obbligatorio</p>}
            </form>
}

export default TodoForm;