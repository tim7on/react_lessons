import React from 'react';
import { iconDefs } from '../../assets/icons/icons';

export const Icon = (props) => {
    const icon = iconDefs[props.type];
    if (!icon) { return null };

    const { className, color, size, ...rest } = props;
    const style = { color, fontSize: size };
    return (
        <svg
            className={icon.className}
            height={icon.height}
            width={icon.width}
            viewBox={icon.viewBox}
            {...style}
            {...rest}
        >
            {icon.body}
        </svg>
    )
}
