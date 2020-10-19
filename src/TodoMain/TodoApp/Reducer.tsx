import  { State, Type, ProductActions } from './types';

const Reducer = ( prevState: State , action: ProductActions ) => {
    switch(action.type){
        case Type.Init:
            return {
                ...prevState,
                items : action.payload
            }
        case Type.Add:
            return {
                ...prevState,
                items : prevState.items.concat({
                    id: action.payload.id,
                    title: action.payload.title
                })
            }
        case Type.Edit:
            return {
                ...prevState,
                items: prevState.items.map( item => {
                    if(item.id === action.payload.id){
                        item.title = action.payload.title
                    }
                    return item;
                })
            }
        case Type.Delete:
            return {
                ...prevState,
                items : prevState.items.filter( item => item.id !== action.payload.id )
            }
        case Type.EditMode:
            return {
                ...prevState,
                mode : {
                    type : 'edit',
                    id : action.payload.id
                }
            }
        case Type.AddMode:
            return {
                ...prevState,
                mode : {
                    type : 'add',
                    id : null
                }
            }
        default:
            return prevState;            
    }
}

export default Reducer;