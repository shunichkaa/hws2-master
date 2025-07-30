import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 10))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const handleSingleChange = (event: Event, newValue: number | number[]) => {
        const val = newValue as number
        setValue1(val)
        if (val > value2) setValue2(val)
    }

    const handleDoubleChange = (event: Event, newValue: number | number[]) => {
        const [val1, val2] = newValue as number[]
        setValue1(val1)
        setValue2(val2)
    }

    return (
        <div id="hw11" className={s2.container}>
            <div className={s2.hwTitle}>Homework #11</div>
            <div className={s2.hw}>
                <div className={s.container}>

                    <div id="hw11-single-slider" className={s.sliderWrapper}>
                        <span id="hw11-value" className={s.valueLabel}>{value1}</span>
                        <div className={s.sliderContainer}>
                            <SuperRange
                                value={value1}
                                onChange={handleSingleChange}
                            />
                        </div>
                        <span className={`${s.valueLabel} ${s.rightValue}`}></span>
                    </div>

                    <div id="hw11-double-slider" className={s.sliderWrapper}>
                        <span id="hw11-value-1" className={s.valueLabel}>{value1}</span>
                        <div className={s.sliderContainer}>
                            <SuperRange
                                value={[value1, value2]}
                                onChange={handleDoubleChange}
                            />
                        </div>
                        <span id="hw11-value-2" className={`${s.valueLabel} ${s.rightValue}`}>{value2}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HW11