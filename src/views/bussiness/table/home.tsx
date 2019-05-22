import * as React from 'react';
import {Link} from 'react-router-dom';

export default class AppContent extends React.Component{
    render(){
        return (
            <div>
                <div>'表格首页'</div>
                <Link to="/bussiness/table/create">新增</Link>
            </div>
        )
   }
}