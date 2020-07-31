import React, { useEffect,useState } from "react";
import RcCheckbox from 'rc-checkbox';
import { prefixClassName } from "../utils/constants";

interface IRadioProps {
    children?: React.ReactNode;
    checked?: boolean;
    className?: string;
    prefixCls?: string;
    onChange?: (e) => void;
    value?: string;
}
export const Radio: React.FC<IRadioProps> = (props) => {
    const { children } = props;

    return (
        <label className={`${prefixClassName}-radio`}>
            <RcCheckbox type="radio" {...props}/>
            {children ? <span>{children}</span> : null}
        </label>
    )
}

export default Radio