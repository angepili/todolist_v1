type ActionMap<M extends { [ index: string ]:any}> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    } : {
        type: Key;
        payload: M[Key]
    }
}

export enum Type {
    Add = 'ADD_ITEM',
    Edit = 'EDIT_ITEM',
    Delete = 'REMOVE_ITEM',
    EditMode = 'EDIT_MODE',
}

export type Items = {
    id: number,
    title: string,
    description?: string,
    status?: string
}

type ProductPayload = {
    [Type.Add] : {
        id: number;
        title: string;
        // description: string;
        // status: string;
    };
    [Type.Edit] : {
        id: number;
        title: string;
        description: string;
        status: string;
    };
    [Type.Delete] : {
        id: number
    };
    [Type.EditMode] : {
        id: number
    }
}

export type State = {
    items: Array<Items>,
    isLogged : boolean,
    mode : {
        type : string
        id : number | null
    }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];