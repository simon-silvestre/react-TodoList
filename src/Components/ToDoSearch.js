import React, { useState, useRef, useEffect } from 'react'
import ToDoList from './ToDoList'
import axios from 'axios'

function ToDoSearch() {

    // Variables
    const [toDos, setToDos] = useState([]);

    const [addToDo, setAddToDo] = useState('')

    const url = 'https://react-todo-list-4a219-default-rtdb.europe-west1.firebasedatabase.app/todos.json'

    const inputRef = useRef('')


    // Fonctions

    // focus input
    useEffect(() => {
        inputRef.current.focus()
    },[])

    // Stocker la tache dans le state AddToDo
    function addButtonHandler(e) {
        let inputTodo = [...addToDo]
        inputTodo = e.target.value
        setAddToDo(inputTodo)
    }

    // Ajouter une tache 
    function handleSubmit(e) {
        e.preventDefault();

        if(addToDo) {
            const tache = {
                text: addToDo,
                checked: false
            };

            const newTodo = [...toDos]
            newTodo.push({
                text: addToDo,
                checked: false
            });

            axios.post(url, tache)
            setAddToDo('')
        }
    }

    // Récupérer les taches
    useEffect(() => {
       axios.get(url)
        .then(response => {
            const nouvellesTaches = []
            for (let key in response.data) {
                nouvellesTaches.push({
                    ...response.data[key],
                    id: key
                })
            }
            setToDos(nouvellesTaches)
        })
    })

    // Supprimer une tache
    function removeButtonHandler(index) {
        const newToDo = [...toDos]
        newToDo.splice(index, 1)
        setToDos(newToDo)

        axios.delete('https://react-todo-list-4a219-default-rtdb.europe-west1.firebasedatabase.app/todos/' + toDos[index].id + '.json')
    }

    // Validé une tache
    function inputCheckedHandler(index) {
        const newTodo = [...toDos]
        newTodo[index].checked = !newTodo[index].checked
        setToDos(newTodo)

        axios.put('https://react-todo-list-4a219-default-rtdb.europe-west1.firebasedatabase.app/todos/' + toDos[index].id + '.json', newTodo[index])
    }

    return (
        <div>
        <div className='ToDoSearch'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={addToDo} onChange={(e) => addButtonHandler(e)} ref={inputRef}/>
                <button>Ajouter</button>
            </form>
        </div>
        <ToDoList toDos={toDos} remove={removeButtonHandler} checked={inputCheckedHandler}/>
        </div>
    )
}

export default ToDoSearch
