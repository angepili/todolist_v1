import React, { CSSProperties } from 'react';

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const mobile = 768

export const Styles:StylesDictionary  = {
    Header : {
        backgroundColor: '#fff', 
        position: 'fixed', 
        zIndex: 1, 
        width: '100%',
        padding: '0 15px'
    },
    Content : { 
        marginTop: 64,
    },
    TodoItem : {
        margin: '15px'
    },
    TodoItemTitle : {
        fontSize: window.innerWidth < 768 ? 16 : 24,
        lineHeight: window.innerWidth < 768 ? 2.4 : 1.5,
        margin: 0
    }
}