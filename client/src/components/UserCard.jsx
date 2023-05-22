import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../redux/action'
import EditUser from './EditUser'

const UserCard = ({user}) => {

    const dispatch = useDispatch()
  return (
    <div>
<Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Button variant="changer" onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}}>Delete</Button>
        <EditUser user={user} />
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard