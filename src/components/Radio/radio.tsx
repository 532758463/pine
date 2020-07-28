import React, { useEffect,useState } from "react";
import RcCheckbox from 'rc-checkbox';

interface IRadioProps {
    children?: React.ReactNode;
    checked?: boolean;
    className?: string;
    prefixCls?: string;
    onChange?: (e) => void;
}
export const Radio: React.FC<IRadioProps> = (props) => {
    const { children } = props;

    return (
        <label className="pine-radio">
            <RcCheckbox type="radio" {...props}/>
            {children ? <span>{children}</span> : null}
        </label>
    )
}

export default Radio