import React, { useEffect, useState } from 'react'
import './App.css'
const ToDo = () => {

    const [data, setdata] = useState('')
    const [todolist, setTodolist] = useState([])


useEffect(()=>{

},[])

    const handleChange = (e) => {
        try {
            setdata(e.target.value)
        } catch (error) {
            console.log(error.message)

        }
    }

    const AddNewTask = (e) => {
        e.preventDefault()
        try {
            setTodolist([...todolist, data])
            setdata('')
        } catch (error) {
            console.log(error.message)
        }
    }

    const RemoveTask = (item) => {
        try {
            setTodolist(todolist.filter((task) => task !== item))

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='Todo-container'>
            <h1>TO DO APP</h1>
            <div className="search-container">
                <div className="">
                    <input type="text" placeholder=' Enter new task' onChange={handleChange} />
                    <span><button type="button" onClick={(e) => AddNewTask(e)}>Add</button> </span>


                    <div className="">
                        {Array.isArray(todolist) && todolist.length > 0 ? (
                            todolist.map((item, idx) => {
                                return (
                                    <div className="listitems" key={idx}>
                                        <p>{item}</p>
                                        <button onClick={() => RemoveTask(item)}>Done</button>
                                    </div>
                                )
                            })
                        ) : (null)}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ToDo
