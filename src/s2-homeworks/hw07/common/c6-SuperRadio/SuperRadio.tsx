import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        if (onChangeOption && options) {
            const selectedOption = options.find(o => String(o.id) === e.currentTarget.value)
            onChangeOption(selectedOption)
        }
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={`hw7-super-radio-input-${o.id}`}
                      className={finalRadioClassName}
                      type={'radio'}
                      name={name}
                      value={o.id}
                      checked={String(value) === String(o.id)}
                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={`hw7-super-radio-span-${o.id}`}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
