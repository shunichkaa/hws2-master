import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {changeThemeId} from "./bll/themeReducer";

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    const dispatch = useDispatch()
    const themeId = useSelector((state: RootState) => state.theme.themeId)

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeId(Number(e.currentTarget.value)))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = String(themeId)
    }, [themeId])

    return (
        <div id="hw12">
            <div id="hw12-text" className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id="hw12-select-theme"
                    className={s.select}
                    options={themes}
                    value={themeId}
                    onChange={onSelectChange}
                />
            </div>
        </div>
    )
}

export default HW12