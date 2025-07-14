import React,{useState} from 'react'
import './App.css'


const App = () => {
  // const [visible,setVisible] = useState(true)
  // const [show,setShow] = useState(true)
  
  const [task,setTask] = useState({
    id : 1 ,
    name : '',
    status : ''
  });

  const [todo,setTodo] = useState([])

  const changeHandler = (e) => {
      e.preventDefault();
      console.log(task);
      let crntTask = [...todo,task];
      setTodo(crntTask);
      setTask({
        id : task.id + 1,
        name : '',
        status : ''
      })
      console.log(todo)
  }
  

  const deleteHandler = (crtid) => {
      const newtodo = todo.filter((item) => item.id !== crtid)
      setTodo(newtodo)
  } 
 

  return(
    <div className='main-div d-flex flex-column justify-content-center align-items-center  gap-2  '  >
       <h1> To do List App!  </h1>
       <form className='me-2' onSubmit={changeHandler} >
          <input type='text' className='me-2' required placeholder='enter your task' value={task.name} onChange={(e) => setTask({...task,name : e.target.value }) }  ></input>
          <select className='me-2 p-1 border border-1 border-primary'  value={task.status} onChange={(e) => setTask({...task,status : e.target.value }) } >
             <option>select</option>
             <option value='pending' >pending</option>
             <option value='completed' >completed</option>
          </select>
          <button className='p-1 btn btn-warning' >Add</button>
       </form>
       <div className='w-25 p-1'>
         {/* <button onClick={()=> setVisible(false)} >{visible ? 'hide' : 'show'}</button> */}
         {/* className={visible ? 'd-block' : 'd-none'} */}
         <div  > 
          {todo.map((item)=>(
             <ul className='p-2'  key={item.id}>
                 <li className={item.status === 'completed' ? 's-li p-2  ' : 'd-li p-2 '} >{item.name}  <button className='btn btn-danger btn-sm' onClick={() => deleteHandler(item.id)} >delete</button> </li> 
             </ul>
          ))}
         </div>
       </div>
    </div>
  )
}

export default App