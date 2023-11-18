import React, { useEffect, useState } from 'react'
import Create from './Create'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';

function Home() {
  const [todos, settodos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/get")
      .then((res) => {
        settodos(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const handledEdit = (id) => {
    axios.put("http://localhost:5000/update/" + id)
      .then((res) => {
        location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handledDelete =(id)=>{
    axios.delete("http://localhost:5000/delete/" + id)
      .then((res) => {
        location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="home">
      <h2>To-Do List</h2>
      <Create />
      {
        todos.length === 0 ?
          <p style={
            {
              textAlign: "center",
              marginTop: "10px"
            }
          }>
            No Task</p> :
          todos.map(todo => (
            <div className='task'>
              <div className="checkbox" onClick={() => handledEdit(todo._id)}>
                {todo.done ? <BsFillCheckCircleFill className='icon' /> : <BsCircleFill className='icon' />
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' 
                onClick={() => handledDelete(todo._id)} /></span>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default Home
