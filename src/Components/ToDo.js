import React from 'react'

function ToDo({ text, remove, checked }) {
    return (
        <div className='ToDo'>
            <div className="task">
                <input type="checkbox" onClick={checked}/>
                <p>{text}</p>
            </div>
            <span onClick={remove}>x</span>
        </div>
    )
}

export default ToDo
