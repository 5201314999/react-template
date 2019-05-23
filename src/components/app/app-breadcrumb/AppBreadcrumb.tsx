import * as React from 'react';
import {Breadcrumb,Icon } from 'antd';

import * as Styles from './AppBreadCrumb.scss';

export default class AppBreadCrumb extends React.Component{

    render(){ 
        return (
            <div className={Styles.breadcrumbWrapper}> 
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                    <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>业务模块</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>表格管理</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }

}