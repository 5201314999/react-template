
import * as React from 'react';
import * as Loadable from "react-loadable";
import { Route,Switch} from "react-router-dom";

import * as Styles from './AppContent.scss';

import DashBoard from '@/views/dashboard/Dashboard';
import Create from '@/views/bussiness/table/create';
import Table from '@/views/bussiness/table/home';
import Log from '@/views/bussiness/log/Log';


export default class AppContent extends React.Component{
    render(){
        return (
            <div className={Styles.appMain}>
                <Route path='/' exact component={DashBoard}></Route>
                <Route path='/dashboard' component={DashBoard}></Route>
                <Route path='/bussiness/table'exact component={Table}></Route>
                <Route path='/bussiness/table/create' exact component={Create}></Route>
                <Route path='/bussiness/log' exact component={Log}></Route>
            </div>
        )
    }
}
