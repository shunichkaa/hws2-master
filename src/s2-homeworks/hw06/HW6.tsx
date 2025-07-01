import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div className={s.hwContainer} id={'hw6-task'}>
            <div className={s.hwTitle}>Hometask № 6</div>
            <SuperEditableSpan
                value={value}
                onChangeText={setValue}
                spanProps={{id: 'hw6-editable-span', defaultText: 'Edit text'}}
            />
            <div style={{marginTop: 24}}>
                <button id={'hw6-save'} className={s.button} onClick={save}>
                    Save to ls
                </button>
                <button id={'hw6-restore'} className={s.button} onClick={restore} style={{color: '#1976d2', background: '#fff', border: '1px solid #1976d2'}}>
                    Get from ls
                </button>
            </div>
        </div>
    )
}

export default HW6
