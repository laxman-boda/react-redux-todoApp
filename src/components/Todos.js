import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodo, removeTodo, updateTodo } from '../Redux/reducer'
import { GoPlus } from "react-icons/go";
const mapStateToProps = (state) =>{
    return {
        todos:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo:(id) => dispatch(removeTodo(id)),
        updateTodo:(obj) => dispatch(updateTodo()),
        completeTodo:(id) => dispatch(completeTodo(id)),

    }
}
const Todos = (props) => {
    const [todo, setTodo] = useState("")
    
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const add = () => {
        props.addTodo({
            id:Math.floor(Math.random() * 1000),
            item:todo,
            completed:false
        })
    }
    return (
        <div className="addTodos">
            <input 
                type="text" 
                className="todo-input"
                onChange={(e) => handleChange(e)}
                value={todo}
            />
            <button 
                className="add-btn"
                onClick={() => add()}    
            >
                <GoPlus />
            </button>
            <br />
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)
