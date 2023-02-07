import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState, MouseEvent} from 'react'
import s from './SuperButton.module.css'


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
    default?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = s.button + ' ' + (restProps.default ? s.default : '') + ' ' + ( xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : '') + ' ' + (className ? ' ' + className : '') + ' ' + (disabled ? s.disabled : '') // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
