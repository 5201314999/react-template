import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from '@/views/home/Home';
import './index.less';

const render = () => {  
    ReactDOM.render(
        <Home />,
        document.querySelector('#app'));
}

render();