import { ADD_TODO, DELETE_TODO } from "./types"

//CASO EN EL QUE SE UTILICE UNA API
// export const addTodoAction= (todo) =>dispatch=>{
//     fetch().then(
//         dispatch({
//             type:ADD_TODO,
//             payload: todo,
//         })
//     );
// };

export const addTodoAction= (todo) =>({
    type: ADD_TODO,
    payload:todo,
});

export const deleteTodoAction= (todoId)=>({
    type: DELETE_TODO,
    payload:todoId,
});
