import React from 'react';
import Button from '../button/Button'
import Input from '../input/Input';
import { iconTypes } from '../../constants/icons';
import { Icon } from '../icon/Icon';
import styles from './ToDoList.module.scss';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.inputRef = React.createRef();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newItemValue = this.inputRef.current.value;

        if (!newItemValue) { return; }

        const trimValue = newItemValue.trim();
        if (trimValue.length) {
            this.props.addItem({ value: newItemValue, uid: Date.now() });
            this.formRef.current.reset();
        }

    }

    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}{...this.props}>
                <div className={styles.newToDo}>
                    <Input inputType="texttodo" inRef={this.inputRef} name="newToDo"></Input>
                    <Button type='submit'>
                        <Icon type={iconTypes.add} size="32px" />
                    </Button>
                </div>
            </form>
        );
    }
}