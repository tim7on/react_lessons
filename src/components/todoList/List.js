import React from 'react'
import { Item } from './Item'
import styles from './ToDoList.module.scss'

export const List = (props) => {
    const items = props.items.map(item => {
        return (
            <Item
                key={item.uid}
                id={item.uid}
                item={item}
                removeItem={props.removeItem}
            />
        );
    });

    return <ul className={styles.listContainer}>{items}</ul>
}
