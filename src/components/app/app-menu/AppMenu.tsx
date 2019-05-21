import React, { Component } from 'react'
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';

import * as Styles from './AppMenu.scss'; 

const SubMenu=Menu.SubMenu;

interface IProps{
    menus:any[],
    collapsed?:boolean
}

export default class AppMenu extends React.Component<IProps>{
    constructor(props:IProps){
        super(props);
        this.buildMenu=this.buildMenu.bind(this);
    }

    render(){
        return (
            <Menu
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.props.collapsed}
            >
                {   
                    this.buildMenu(this.props.menus)
                }
            </Menu>
        )
    }
    
    componentDidMount(){
    }

    //递归生成菜单
    buildMenu(menus:any[]):any{
        return menus.map(item=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span>
                    }>
                    {this.buildMenu(item.children)}
                    </SubMenu>
                )
            }
            else{
                return (<Menu.Item key={item.key}><Link to={item.link}>{item.name}</Link></Menu.Item>)
            }
        })
    }
}
