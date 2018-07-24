import React from 'react'

const Listitems = ({ todo, toggleTodo, editTodo }) => {
    if (todo == null) {
        return <p>nothing to show</p>
    }
    const listitem = todo.map((item, index) => (
        <li className='listli' key={index}>
            <input type='checkbox' checked={item.completed} onClick={() => toggleTodo(index)} />
            <input className='listitemtitle' type='text' id={index} value={item.text} onChange={(event) => editTodo(event.target.value, event.target.id)} />
            {item.completed &&
                <span className='badge comp'>Completed</span>
            }
        </li>
    )
    );
    return (
        <div className='listdiv'>
            <ul className='listul'>
                {listitem}
            </ul>
        </div>
    );
}

export default Listitems
