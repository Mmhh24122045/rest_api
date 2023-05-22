import { ADDUSERS, DELETEUSERS, EDITUSERS, GETUSERS } from "./actionType"
import axios from 'axios';

export const getUsers= () => async(dispatch) => {
    try {
        const res = await axios.get('/get')
        console.log(res)
        dispatch({
            type:GETUSERS,
            payload:res.data
        })
        
    } catch (error) {
        alert('get error')
    }
}
export const addUser = (newUser) => async(dispatch) =>{
    try {
        const {data} = await axios.post('/add',newUser)
        dispatch({
            type:ADDUSERS,
            payload:data
        })
        
    } catch (error) {
        alert('post error')
        
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
        await axios.delete(`/delete/${id}`)
        dispatch({
            type:DELETEUSERS,
            payload:id
        })
        
    } catch (error) {
        alert('delete error')
        
    }
}

export const editUsers = (editUsers) => async(dispatch) => {
    try {
        const res = await axios.put(`/update/${editUsers.id}`, editUsers)
        dispatch({
            type:EDITUSERS,
            payload:res.data,
        })
        
    } catch (error) {
        alert('edit error')
        
    }

}