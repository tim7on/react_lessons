import React from 'react';
import styles from './NewForm.module.scss';

const NewForm = (props) => {
    return (
        <div className={styles.box}>
            <fieldset className={styles.fieldform}>
                <legend>{props.name}</legend>
                {props.children}
            </fieldset>
        </div>
    )
}

export default NewForm
