import React from 'react';
import { Todo } from '../models/Todo';


interface TodoListItemProps{
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {

  const handleChange = (event: any) =>{
    event.target //para ver o evento que aconteceu
    console.log('Mudou');
  }
  return (
    <tr className="uk-animation-slide-bottom-medium">
        <td className="uk-width-auto">
            <label>
                <input className="uk-checkbox" type="checkbox" 
                checked={props.todo.done} onChange={handleChange}/>
            </label>
        </td>
        <td className="uk-width-expand">{props.todo.title}</td>
        <td className="uk-width-auto">
            <button className="uk-icon-button uk-button-danger" uk-icon="trash"></button>
        </td>
    </tr>
  )
}

export default TodoListItem;