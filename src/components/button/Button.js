import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    const { type, ...rest } = props;
    return (
        <button type={type} className={styles.btn_act} {...rest}>
            {props.children}
        </button>
    )
}

export default Button;