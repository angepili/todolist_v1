import React, { CSSProperties } from 'react';

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

export const Styles:StylesDictionary  = {
    Header : {
        backgroundColor: '#fff', 
        position: 'fixed', 
        zIndex: 1, 
        width: '100%'
    },
    Content : {
        padding: '0 50px', 
        marginTop: 64 
    },
    TodoItem : {
        margin: '0 0 30px'
    }
}