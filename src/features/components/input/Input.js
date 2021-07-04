import React from 'react'
import styles from './Input.module.scss'


export const Input = props => {

    const { name, inputType, onChange, value, inRef, labelName, ...rest } = props;

    let input = null;;
    if (inputType === 'submit') {
        input = <input type={inputType} className={styles.btn} name={name} value={value} {...rest} />
    } else if (inputType === 'text') {
        input = (
            <div className={styles.block}>
                <label>{labelName}</label>
                <input type={inputType} className={styles.input} name={name} onChange={onChange} value={value} {...rest} />
            </div>
        )
    } else if (inputType === 'file')
        input = (
            <div className={styles.block}>
                <label for={name} className={styles.btn}>{labelName}</label>
                <input id={name} type={inputType} className={styles.input} name={name} ref={inRef} {...rest} />
            </div>
        )
    return (
        input
    )
}


export default Input;