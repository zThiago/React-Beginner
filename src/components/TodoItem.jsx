import EventTodo from '../events/todo';

function Item(Item) {

    return (<div key={Item.id} onClick={function(e){
        if(e.target.className.includes("remove_button") ||e.target.className.includes("span_text")) return;
        EventTodo.emit('updateItem', Item);
        Item.completed = !Item.completed;
        e.target.className = `item_div task_${Item.completed ? 'completed' : 'incompleted'}`
    }} className={`item_div task_${Item.completed ? 'completed' : 'incompleted'}`}>
        <span className='span_text'>{Item.name}</span>
        <button className="remove_item list_button remove_button" onClick={function(){
            //console.log('new request to remove item')
            EventTodo.emit('removedItem', Item);
        }}>Remove</button>
        </div>)
}

export default Item