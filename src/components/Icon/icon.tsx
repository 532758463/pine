import React from "react";
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from "./interface";
import { prefixClassName } from "../utils/constants"

export const Icon:React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props
    const classes = classNames(`${prefixClassName}-icon`, className, {
      [`${prefixClassName}-icon-${theme}`]: theme
    })

    return (
        // https://github.com/FortAwesome/react-fontawesome
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}