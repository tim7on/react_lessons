import React, { useState } from 'react';
import NewForm from '../newForm/NewForm';
import { List } from './List';
import { Form } from './Form';
// import Input from '../input/Input';
// import { Icon } from '../icon/Icon';
// import Button from '../button/Button';
// import { iconTypes } from '../../constants/icons';
// import styles from './ToDoList.module.scss'

const ToDoList = (e) => {

    const [allValues, setAllValues] = useState({
        todo: []
    });

    const addItem = (todo) => {
        const newList = [todo, ...allValues.todo];
        setAllValues({ todo: newList })
    }


    const removeItem = id => {
        const newList = allValues.todo.filter(item => id !== item.uid);
        setAllValues({ todo: newList });
    }
    return (
        <NewForm name="ToDoList">
            <List items={allValues.todo} removeItem={removeItem} />
            <Form addItem={addItem} />
        </NewForm>
    )
}


export default ToDoList;
