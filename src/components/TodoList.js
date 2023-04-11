import { useState } from "react";


const Todolist = () => {
    const [todos, setTodos]= useState(["Web Todo Liste erstellen.", "Buch lesen.", "Ins Fitnessstudio gehen."])
    const [input, setInput]= useState("")
    const inputChange = (event) => {
        setInput(event.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, input])
        setInput("")
    }
    const strich = (index, checked) => {
        const todoCon = document.querySelectorAll(".todoContainer")
        const todoBox = todoCon[index]
        todoBox.style.textDecoration = checked ? "line-through" : "none"
    }
    const loesch = (index) => {
        const todoCon = document.querySelectorAll(".todoContainer")
        const todoBox = todoCon[index]
        if (todoBox.style.textDecoration === "line-through") {
            todoBox.style.display = "none"

        }
    }
    return (
        <div>
        <ul>
            {todos.map((todo, index) => {
                return (
                    <div className="todoContainer">
                    <input type="checkbox" name="" id="" onClick={(event)=>strich(index, event.target.checked)}/>
                    <li>{todo}</li>
                    <button onClick={()=>loesch(index, true)}>Delete</button>
                    </div>
                )
            })}
        </ul>
        <form action="">
            <input type="text" name="" id="" placeholder="Add todo" value={input} onChange={inputChange}/>
            <button onClick={addTodo}>submit</button>
        </form>
        </div>
    );
}

export default Todolist;