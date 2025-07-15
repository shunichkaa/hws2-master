import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        if (timerId) return;
        const id = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    }

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
        }
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    // Форматирование времени: часы:минуты:секунды
    const stringTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    // Форматирование даты: день.месяц.год
    const stringDate = date.toLocaleDateString('ru-Ru');

    // День недели и месяц на английском
    const stringDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    // Месяц на английском
    const stringMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

    // Формируем строку для отображения даты под часами
    const extraLine = `${stringMonth}, ${stringDate}`;

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    <span id={'hw9-month'} style={{display: show ? 'inline' : 'none'}}>{stringMonth}</span>
                    {show && ', '}
                    <span id={'hw9-date'}>{show ? stringDate : ''}</span>
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined} // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined} // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
