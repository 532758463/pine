import React, { useState } from "react";
import classnames from "classnames";
import { InputProps } from "./interface";
import { prefixClassName } from "../utils/constants";

export const Input: React.FC<InputProps> = (props) => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const { size, disabled, prefix, suffix, style, onBlur, onFocus, ...restProps } = props;
    const wrapperClass = classnames([`${prefixClassName}-input-wrapper`], {
        [`${prefixClassName}-input-size-${size}`]: size,
        [`${prefixClassName}-input-disabled`]: disabled,
        [`${prefixClassName}-input-group`]: prefix || suffix,
        [`${prefixClassName}-prefix`]: prefix,
        [`${prefixClassName}-suffix`]: suffix,
        [`${prefixClassName}-input-focused`]: isFocus,
    });

    const focus: React.FocusEventHandler<HTMLInputElement> = (e) => {
        setFocus(true);
        onFocus && onFocus(e);
    };

    const blur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        setFocus(false);
        onBlur && onBlur(e);
    };

    return (
        <div className={wrapperClass} style={style}>
            {prefix && <span className={`${prefixClassName}-input-prefix`}>{prefix}</span>}
            <input
                className={`${prefixClassName}-input-inner`}
                disabled={disabled}
                onFocus={focus}
                onBlur={blur}
                {...restProps}
            />
            {suffix && <span className={`${prefixClassName}-input-suffix`}>{suffix}</span>}
        </div>
    );
};

export default Input;
