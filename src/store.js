export const initialStore=()=>{
  return{
    
    contacts: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
    ],
    userRole: ""
  };
};

export default function storeReducer(store, action = {}) {

  switch(action.type){

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Acción desconocida.');
      
  }    
}
