import  { State, Type, ProductActions } from './types';

const Reducer = ( prevState: State , action: ProductActions ) => {
    switch(action.type){
        case Type.Add:
            console.log(action);
            return {
                ...prevState,
                items : prevState.items.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    // description: action.payload.description,
                    // status: action.payload.status
                })
            }
        case Type.Edit:
            return {
                ...prevState,
                items: prevState.items.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description,
                    status: action.payload.status
                })
            }
        case Type.Delete:
            return {
                ...prevState,
                items : prevState.items.filter( item => item.id !== action.payload.id )
            }
        default:
            return prevState;            
    }
}

export default Reducer;