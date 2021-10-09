import React from "react"
import { useHistory } from "react-router"
import './User.css'

type UserTypeProps = {
    name: string,
    role: string,
    _id: string
}

export const User:React.FC<UserTypeProps> = ({name, role, _id}) => {

    const history = useHistory()

    const clickHandler = (): void => {
        history.push({
            pathname: `/profile/${_id}`
        })
    }

    return (
        <div className='user' onClick={clickHandler}>
            <div className='user__name'>{name}</div>
            <div className="user__role">{role}</div>
        </div>
    )
}