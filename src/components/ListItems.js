import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import { DELETE_TASK } from '../JS/constants/actionsType'
import { deleteTask, completeTask } from '../JS/actions/actionTask'

const ListItems = () => {

    const list = useSelector(state => state.reducerTask.list)
    const dispatch = useDispatch()
  return (
    <ListGroup>
        {list.map(item=>
        <h1><button onClick={()=>dispatch(deleteTask(item.id))}>Delete</button>
        <button onClick={()=>dispatch(completeTask(item.id))}>{item.isDone?"unDone":"isDone"}</button>
        <button>Edit</button>
        {item.description}</h1>)}
    </ListGroup>
  )
}

export default ListItems