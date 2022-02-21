import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions/actionTask'

const AddItems = () => {
  const [myinput, setMyinput] = useState("")
  const dispatch = useDispatch()
  const add =(e)=>{ 

    if (myinput)
   
   {
    e.preventDefault(); 
    dispatch (addTask({description: myinput, id:Date.now(), isDone:false}));
    setMyinput('')}
    else{
      alert("pardon")
    }


  }
 
  return (
    <div>
      <form onSubmit={add}>
      <h1>bienvenu</h1>
      <li>veuillier indiquer un sentiment</li>
      <input className='input'
            type="text"
            id="name"
            name="name"
            placeholder="dit nous quelque chosee *"
            autoComplete="off"
            value={myinput}
            onChange={(e)=> setMyinput(e.target.value)}/>
            <button onClick={add}>Livrée</button>
            </form>    
    </div>
  )
}

export default AddItems