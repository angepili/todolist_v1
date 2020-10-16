import React, { CSSProperties } from 'react';

export interface StylesDictionary{
    [Key: string]: CSSProperties;
}

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
    }
}