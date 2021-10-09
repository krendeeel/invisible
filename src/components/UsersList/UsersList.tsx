import React from 'react'
import {Input} from 'antd'
import './UsersList.css'
import { User } from '../User/User'


const users = [{
    _id: '1',
    name: 'Ivan',
    role: 'Admin'
},
{
    _id: '2',
    name: 'Bob',
    role: 'User'
},
{
    _id: '3',
    name: 'Sergey',
    role: 'Guest'
},
{
    _id: '4',
    name: 'Boris',
    role: 'User'
},
{
    _id: '5',
    name: 'Alex',
    role: 'Admin'
}]

export const UsersList:React.FC = () => {
    return (<div  className='userslist'>
        <div className='userslist__title'>Поиск пользователей онлайн:</div>
        <div className='userslist__search'>
            <Input.Search placeholder='Введите имя пользователя'/>
        </div>
        <div className='userslist_items'>
            {users.map(user => <User key={user._id} {...user}/>)}
        </div>
    </div>)
}