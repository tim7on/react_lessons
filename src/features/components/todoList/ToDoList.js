import React, { useState } from 'react';
import NewForm from '../newForm/NewForm';
import Input from '../input/Input';
import { Icon } from '../icon/Icon';
import Button from '../button/Button';
import {iconTypes} from '../../constaints/icons';
import styles from './ToDoList.module.scss'

const ToDoList = (e) => {

    // const [state, setstate] = useState(initialState)
    // handleInputChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({
    //         [name]: value
    //     })
    // }
    return (
        <NewForm name="ToDoList">
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className={styles.newToDo}> <Input inputType="texttodo" name="newToDo"></Input><Button><Icon type={iconTypes.plus} size="32px"/></Button></div>
        </NewForm>
    )
}


export default ToDoList;
