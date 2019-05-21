import * as React from "react";
import * as styles from "./AppHeader.scss";
import {Icon,Dropdown,Menu} from 'antd';

import avatar from "@/images/home/avatar.jpg";

interface IProps{
    collapse: boolean,
    handleCollapse?:any
}
interface IState {
    collapse?: boolean,
    sysMenu:any[],
    userName:string
}


export default class AppHeader extends React.Component<IProps,IState> {

    public readonly state: Readonly<IState> = {
        collapse:false,
        sysMenu: [
            {
              key: "info",
              name: "个人信息"
            },
            {
              key: "logout",
              name: "退出登录"
            }
          ],
          userName:'超级管理员'
    }

  
    constructor(props:IProps){
        super(props);
        this.handleCollapse=this.handleCollapse.bind(this);
    }

    render() {
        const menuLogo = this.state.collapse ? (
            <Icon type="menu-unfold" />
        ) : (
            <Icon type="menu-fold" />
        );
        return (
        <div className={styles.appHeader}>
            <div className={styles.siderTrigger} onClick={this.handleCollapse}>
            {menuLogo}
            </div>
            <div className={styles.nav}>
            <Dropdown
                overlay={
                <Menu>
                    {this.state.sysMenu.map(item => (
                    <Menu.Item key={item.key}>{item.name}</Menu.Item>
                    ))}
                </Menu>
                }
                className={styles.avatarInfo}
            >
                <a className="ant-dropdown-link" href="#">
                <img src={avatar} />
                <h1>{this.state.userName}</h1>
                </a>
            </Dropdown>
            </div>
        </div>
        );
    }
    componentDidMount(){
        this.setState({
            collapse: this.props.collapse
         });
    }

    handleCollapse(){
        this.setState({
           collapse: !this.state.collapse
        });
        this.props.handleCollapse();
    }

}
