import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/action'

const AddUser = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
            name,
            email,
            phone
        }
        dispatch(addUser(newUser))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Phone</label>
            <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <button type='submit'>Confirm</button>
        </form>
    </div>
  )
}

export default AddUser