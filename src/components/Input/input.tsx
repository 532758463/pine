import React from "react";
import classnames from "classnames";
import { InputProps } from "./interface";
import { prefixClassName } from "../utils/constants";

export const Input: React.FC<InputProps> = (props) => {
    const { size, disabled, prefix, suffix, style, ...restProps } = props;
    const wrapperClass = classnames([`${prefixClassName}-input-wrapper`], {
        [`${prefixClassName}-input-size-${size}`]: size,
        [`${prefixClassName}-input-disabled`]: disabled,
        [`${prefixClassName}-input-group`]: prefix || suffix,
        [`${prefixClassName}-prefix`]: prefix,
        [`${prefixClassName}-suffix`]: suffix,
    });
    return (
        <div className={wrapperClass} style={style}>
            {prefix && <span className={`${prefixClassName}-input-prefix`}>{prefix}</span>}
            <input className={`${prefixClassName}-input-inner`} disabled={disabled} {...restProps}/>
            {suffix && <span className={`${prefixClassName}-input-suffix`}>{suffix}</span>}
        </div>
    );
};

export default Input;
