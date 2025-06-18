import React from 'react';
import {Layout} from './layout/Layout';
import Pages, {PATH} from './Pages';
import {NavLink} from "react-router-dom";

// Удаляем несуществующий импорт стилей

function HW5() {
    // Так как у нас нет доступа к фактическим стилям, удаляем функцию getNavLinkClassName
    // и используем строковый литерал для возможного будущего стиля
    return (
        <Layout>
            <NavLink
                to={PATH.PRE_JUNIOR}
                className={({isActive}) => isActive ? 'active' : ''}
            >
                PreJunior
            </NavLink>
            {/* Здесь можно добавить другие ссылки на страницы */}
            <Pages/>
        </Layout>
    );
}

export default HW5;