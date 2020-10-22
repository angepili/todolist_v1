import db from '../../utils/firebase';
import { Type } from '../TodoApp/types';

const getItems = ( cbDispatch:Function ) : void => {

    const _dispatch = (data:object[],callback:Function) : void  => {
        callback({
            type : Type.Init,
            payload : data
        })
    }
    
    db.collection("tasks")
        .get()
        .then( docs => {
        
            let items:object[] = [];
            
            docs.forEach( doc => {
                if(doc?.id && doc.id.length > 0) {
                    items.push({
                        id: doc.id,
                        title: doc.data().title
                    })
                }
            });

            return items;
    
        })
        .then( items => _dispatch(items,cbDispatch) );

}

export default getItems;
