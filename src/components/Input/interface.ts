import { IconProps } from './../Icon/interface';
import { InputHTMLAttributes, ReactElement, ChangeEvent } from 'react';

export type InputSize = "lg" | "sm"


export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix'> {
    /**是否禁用input框 */
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProps;
    prefix?: string | ReactElement;
    suffix?: string | ReactElement;
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
}