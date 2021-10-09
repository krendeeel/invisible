import { Button, Checkbox, Input, Modal } from 'antd'
import Select from 'rc-select'
import React, { useState } from 'react'
import { InfoRule } from '../InfoRule/InfoRule'
import './Profile.css'

type ProfileTypesProps = {
    username: string,
    role: string
}

const a = [{
    obj: 'Файл 1',
    rules: ['Полные права']
}, {
    obj: 'Файл 2',
    rules: ['Чтение', 'Запись']
}, {
    obj: 'Файл 3',
    rules: ['Запрет']
},
{
    obj: 'Файл 4',
    rules: ['Чтение']
}]

export const Profile: React.FC<ProfileTypesProps> = ({ username, role }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rules, setRules] = useState<Array<string>>([])

    const [addRulesModal, setAddRulesVodal] = useState<boolean>(false)

    const { Option } = Select;
    const showModal = (index: boolean, rules: Array<string>): void => {
        setIsModalVisible(index)
        setRules(rules)
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk1 = () => {
        setAddRulesVodal(false);
    };

    const handleCancel1 = () => {
        setAddRulesVodal(false);
    };




    function onChange(e: any) {
        console.log(`checked = ${e.target.checked}`);
    }


    return (<div className='profile'>
        <div className='profile__user-info'>
            <div className='info__title title'>Информация пользователя:</div>
            <div className='info__item'>Имя: {username}</div>
            <div className='info__item'>Должность: {role}</div>
        </div>
        <div className='profile__user-rules'>
            <div className='rules__title title'>Перечень прав:</div>
            <div className='rules__list'>
                {a.map(item => <InfoRule showModal={showModal} obj={item.obj} rules={item.rules} isMe={false} addRules={setAddRulesVodal} />)}
            </div>
            <Modal title='Выберите операцию:' footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {
                    rules.includes('Запрет') && <p>К сожалению, у Вас нет прав доступа для осуществления операций с этим объектом</p>
                }

                {
                    (rules.includes('Запись') || rules.includes('Полные права')) &&
                    (<div>
                        <p>Запись:</p>
                        <Input.TextArea />
                        <Button>Записать</Button>
                        <hr />
                    </div>
                    )
                }

                {
                    (rules.includes('Чтение') || rules.includes('Полные права')) &&
                    (<div>
                        <p>Чтение:</p>
                        <Input.TextArea />
                        <Button>Прочитать</Button>
                        <hr />
                    </div>
                    )
                }
            </Modal>
            <Modal title='Выберите операцию для добавления:' footer={null} visible={addRulesModal} onOk={handleOk1} onCancel={handleCancel1}>
                <Checkbox onChange={onChange}>Запись</Checkbox>
                <Checkbox onChange={onChange}>Чтение</Checkbox>
                <Checkbox onChange={onChange}>Запрет</Checkbox>
                <Checkbox onChange={onChange}>Полные</Checkbox>

                <Button>Добавить</Button>
            </Modal>
        </div>
    </div >)
}