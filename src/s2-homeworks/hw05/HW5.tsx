import React from 'react';
import {Layout} from './layout/Layout';
import Pages from './Pages';

// Удаляем несуществующий импорт стилей

function HW5() {
    // Так как у нас нет доступа к фактическим стилям, удаляем функцию getNavLinkClassName
    // и используем строковый литерал для возможного будущего стиля
    return (
        <Layout>
            <Pages/>
        </Layout>
    );
}

export default HW5;