import React, { useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'
import './InfoRule.css'


type InfoRulePropsType = {
    obj: string,
    rules: Array<string>,
    isMe: boolean,
    showModal: (index: boolean, rules: Array<string>) => void,
    addRules: (modal:boolean) => void
}

export const InfoRule: React.FC<InfoRulePropsType> = ({ obj, rules, isMe, showModal, addRules}) => {

    return (
        <div className='rule' onClick={() => { isMe && showModal(true, rules)}}>
            <div className='rule__item'>{obj}: </div>
            <div className='rule__list'>
                {rules.map(rule => <div key={rule}>{rule}</div>)}
            </div>
            {!isMe && <PlusCircleOutlined onClick={()=>addRules(true)}/>}
        </div>
    )
}