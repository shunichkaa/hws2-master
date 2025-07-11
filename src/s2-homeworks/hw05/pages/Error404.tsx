import React from 'react'
import s from './Error404.module.css'
import error404 from './404.svg'
const Error404 = () => {
    return (
        <div id={'hw5-page-404'}>
            <div className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404} />
                <div className={s.title}>404</div>
                <div className={s.text}>Page not found<br/>Страница не найдена</div>
            </div>
        </div>
    )
}

export default Error404
