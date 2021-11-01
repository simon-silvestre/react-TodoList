import React, { useState } from 'react'
import ToDo from './ToDo';

function ToDoList({ toDos, remove, checked }) {

    let newToDo = toDos.map((toDo, index) => {
        return (
            <ToDo
                key={index}
                text={toDo.text}
                remove={() => remove(index)}
                checked={() => checked(index)}
            ></ToDo>
        )
    })

    return (
        <div className='ToDoList'>
            {newToDo}
        </div>
    )
}

export default ToDoList
