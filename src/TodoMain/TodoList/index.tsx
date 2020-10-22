import React, { useContext } from 'react';
import { Type } from '../TodoApp/types';
import { Context } from '../TodoApp';
import TodoItem from '../TodoItem';

import db from '../../utils/firebase';

const TodoList = () => {

    const { state, dispatch } = useContext ( Context );

    const { items } = state;

    // db.collection("users").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // })
    // .then(function(docRef:any):void {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error:string) {
    //   console.error("Error adding document: ", error);
    // });

    return <>{!!items.length && items.map ( (item,index) => <TodoItem key={index} {...item} /> )}</>

}

export default TodoList