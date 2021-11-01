import React, { useState } from 'react'
import ToDoList from './ToDoList'

function ToDoSearch() {

    const [toDos, setToDos] = useState([
        {
            text: 'Apprendre react !!',
            checked: false
        },
        {
            text: 'Acheter du chocolat',
            checked: false
        }
    ]);
    const [addToDo, setAddToDo] = useState('')

    function addButtonHandler(e) {
        let inputTodo = [...addToDo]
        inputTodo = e.target.value
        setAddToDo(inputTodo)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(addToDo) {
            const newTodo = [...toDos]
            newTodo.push({
                text: addToDo,
                checked: false
            });
            setToDos(newTodo)
            setAddToDo('')
        }
    }

    function removeButtonHandler(index) {
        const newToDo = [...toDos]
        newToDo.splice(index, 1)
        setToDos(newToDo)
    }

    function inputCheckedHandler(index) {
        const newTodo = [...toDos]
        newTodo[index].checked = !newTodo[index].checked
        setToDos(newTodo)
    }

    return (
        <div>
        <div className='ToDoSearch'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={addToDo} onChange={(e) => addButtonHandler(e)}/>
                <button>Ajouter</button>
            </form>
        </div>
        <ToDoList toDos={toDos} remove={removeButtonHandler} checked={inputCheckedHandler}/>
        </div>
    )
}

export default ToDoSearch
