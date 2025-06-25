export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed 1",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
     contacts: [ ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'delete_contact':

      const { indexDelete } = action.payload
      console.log('STORE DELETE CONTACT' + indexDelete)

      return {
        ...store,
        contacts: store.contacts.filter( (elementoContacto,index)=> index != indexDelete )
      };
    case 'load_contacts':

      const { newContacts } = action.payload
      return {
        ...store,
        contacts: newContacts
      };
    default:
      throw Error('Unknown action.');
  }    
}
