import { useState } from 'react'
import Menu from '../components/Menu';
import TodoItem from '../components/TodoItem';
import TaskListImage from '../assets/Task-List.png'
import EventTodo from '../events/todo';
import '../styles/default.css';
import '../styles/Todo.css';

function Todo() {
  let [newItem, setItem] = useState('');
  let [todo, setTodo] = useState([]);

  function addItem(form) {
    if(form) form.preventDefault();
    if (!newItem) return;
    setTodo([...todo, { name: newItem, completed: false, id: todo.length+1 }]);
    setItem("");
    document.getElementById("todo_input").focus();
    //console.log(todo)
  }
  EventTodo.removeAllListeners('removedItem')

  EventTodo.on('removedItem', (item) => {
    //console.log('request received')
    let list = todo.filter(c => c.id !== item.id);
    //console.log(list)
    setTodo(list)
    EventTodo.removeAllListeners()
  })
  

  return (
    <div>
      <div className="Header">
        <Menu />
      </div>
      <div className="Body">
        <div className="list_container">
          <div className="list_header">
            <form className="form_input" onSubmit={addItem}>
              <input
                type="text"
                value={newItem}
                id='todo_input'
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                placeholder='Add here your task'
                className="list_input" />
            </form>
            <button className="add_item header_button"  type='submit' onClick={addItem}>Add</button>
          </div>
          <div className="list_body">
            {
              todo.length > 0 ?
                todo.map((item, index) => (
                  TodoItem(item)
                ))
                :
                <img src={TaskListImage} width={500} height={500} className="task_image" />
            }
          </div>
          <button className="remove_all" onClick={function(){
            setTodo([])
          }}>Remove all</button>
        </div>
      </div>
    </div>

  )
}

export default Todo