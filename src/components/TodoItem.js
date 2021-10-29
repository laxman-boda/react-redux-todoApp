import React, { useRef } from 'react'
import {AiFillEdit } from 'react-icons/ai'
import {IoIosDoneAll, IoMdClose} from 'react-icons/io'
const TodoItem = (props) => {
    const {item,updateTodo,completeTodo,removeTodo} = props;
    const inputRef = useRef(true)

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }
    const update = (id,value,e) => {
        if(e.which === 13){
            updateTodo({id,item:value});
            inputRef.current.disabled = true
        }
    }
    return (
                <li key={item.id} className="card">
                        <textarea 
                            ref={inputRef} 
                            disabled={inputRef} 
                            defaultValue={item.item} 
                            onKeyPress={(e) => update(item.id,inputRef.current.value,e)}
                            />
                        <div className="btns">
                        <button onClick={() => changeFocus()}>
                            <AiFillEdit />
                        </button>{" "}
                        {item.completed === false && (
                            <button style={{color:'green'}} onClick={() => completeTodo(item.id)}>
                            <IoIosDoneAll />
                        </button>
                        )}
                        <button style={{color:'red'}} onClick={() => removeTodo(item.id)}>
                            <IoMdClose />
                        </button> {" "}
                        </div>
                        {item.completed && <span className="completed">Done</span>}
                </li>
    )
}

export default TodoItem
