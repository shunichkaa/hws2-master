import React from 'react'
import s from './HW7.module.css'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const options = [
    {id: 1, value: 'Pre-junior'},
    {id: 2, value: 'Junior'},
    {id: 3, value: 'Junior +'},
]

const HW7 = () => {
    const [value, setValue] = React.useState(options[0].id)

    const onChangeOption = (option: any) => {
        setValue(option.id)
    }

    return (
        <div className={s.hwContainer} id={'hw7-task'}>
            <div className={s.hwTitle}>Hometask № 7</div>
            <div style={{display: 'flex', gap: 40, alignItems: 'flex-start'}}>
                <SuperSelect
                    options={options}
                    value={value}
                    onChangeOption={onChangeOption}
                />
                <SuperRadio
                    name="hw7-radio"
                    options={options}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}

export default HW7
