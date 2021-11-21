import {createStore} from 'redux';
import reducer from './reducers'

const initialState= {
    todos:[{
        id:0,
        name:'Hacer compras de super',
        complete:false
    },
    {
        id:1,
        name:'Pasear perros',
        complete:false
    },
    {
        id:2,
        name:'hacer trekking',
        complete:true,
    },
]
};

export const store= createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
   
