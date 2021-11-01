import React from 'react'

function ToDo({ text, remove, checked, isChecked }) {
    return (
        <div className='ToDo'>
            <div className="task">
                <input type="checkbox" defaultChecked={isChecked} onClick={checked}/>
                <p>{text}</p>
            </div>
            <span onClick={remove}>x</span>
        </div>
    )
}

export default ToDo
