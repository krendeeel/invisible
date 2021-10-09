import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import ClassNames from 'classnames'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header: React.FC = () => {

    const history = useHistory()
    // useEffect(()=>{
        
    //     console.log(history.location.pathname.substr(1).split('/')[0])
    //     //@ts-ignore
    //     setActiveItem(history.location.pathname.substr(1).split('/')[0])
    //     alert('1')
    // }, [])

    // useEffect(()=>{
    //     console.log(history.location.pathname.substr(1).split('/')[0])
        
    //     //@ts-ignore
    //     setActiveItem(history.location.pathname.substr(1).split('/')[0])
    //     alert('1')
    // }, [history])

    const [activeItem, setActiveItem] = useState<'profile' | 'userslist'>('profile')

    return (
        <div className='header' >
            <Link to="/profile">
            <div
                onClick={() => setActiveItem('profile')}
                className={ClassNames('nav-item', { 'active': activeItem === 'profile' })}>
                Профиль
            </div>
            </Link>
            <Link to="/userslist">
            <div
                onClick={() => setActiveItem('userslist')}
                className={ClassNames('nav-item', { 'active': activeItem === 'userslist' })}>
               Пользователи
            </div>
            </Link>
        </div>)
}