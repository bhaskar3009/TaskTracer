import React, { useState } from 'react'
import axios from 'axios'
function Create() {
  const [task, settask] = useState()
  const handledAdd = () => {
    if (task.trim() !== '') {
    axios.post("http://localhost:5000/add", {task: task.trim()})
      .then(
        (res) => {
          location.reload()
        }
      )
      .catch(
        (err) => {
          console.log(err)
        }
      )
    }
  }
  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter task here' value={task} onChange={(e) => settask(e.target.value)} />
      <button type="button" onClick={handledAdd}>Add</button>
    </div>
  )
}

export default Create