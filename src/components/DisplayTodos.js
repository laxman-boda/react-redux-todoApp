import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, completeTodo, removeTodo, updateTodo } from '../Redux/reducer'
import TodoItem from './TodoItem'
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
const DisplayTodos = (props) => {
    const [sort,setSort] = useState("active")
 
    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>
            <ul>
                {props.todos.length > 0 && sort === "active" 
                ? props.todos.map((item) => {
                        return (
                            item.completed === false && 
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}
                    {/* For completed Todos */}
                    {props.todos.length > 0 && sort === "completed" 
                        ? props.todos.map((item) => {
                        return (
                            item.completed === true && 
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}
                    {/* For All Todos */}
                    {props.todos.length > 0 && sort === "all" 
                        ? props.todos.map((item) => {
                        return (
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos)
