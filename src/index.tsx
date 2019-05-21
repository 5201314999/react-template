import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from '@/router'
import './index.less';


const render = () => {  
    ReactDOM.render(
        <Router />,
        document.querySelector('#app'));
}

render();