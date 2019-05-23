import * as React from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import App from '@/views/app/App';
import Login from '@/views/login/Login';

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <Route path='/' exact component={App}/>
                    <Route path='/login' component={Login}/>
                </div>
            </HashRouter>
        )       
    }
}