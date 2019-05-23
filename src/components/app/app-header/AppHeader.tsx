import * as React from "react";
import * as styles from "./AppHeader.scss";
import {Icon,Dropdown,Menu,Badge} from 'antd';
import {withRouter,RouteComponentProps} from 'react-router-dom';
import avatar from "@/images/home/avatar.jpg";

interface IProps extends RouteComponentProps<any>{
    collapsed?: boolean,
    handleCollapse?:any
}
interface IState {
    collapsed?: boolean,
    sysMenu:any[],
    message:any[],
    userName:string
}


 class AppHeader extends React.Component<IProps,IState> {

    public readonly state: Readonly<IState> = {
        collapsed:false,
        sysMenu: [],
        message:[],
        userName:'超级管理员',
    }

  
    constructor(props:any){
        super(props);
        this.handleCollapse=this.handleCollapse.bind(this);
    }
   
    render() {
        return (
        <div className={styles.appHeader}>
            <div className={styles.siderTrigger} onClick={this.handleCollapse}>
                <Icon type={this.state.collapsed ?'menu-unfold':'menu-fold'} />
            </div>
            <div className={styles.nav}>
                <div className={styles.item}>
                    <Icon type="appstore" />
                </div>
                <div className={styles.item}>
                    {/* <Dropdown
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
                            <Badge count={5}>
                                <Icon type="bell" style={{fontSize:'20px'}}/>
                            </Badge>
                        </a>
                    </Dropdown> */}
                </div>
                <div className={styles.item}>
                    <Dropdown
                        overlay={
                        <Menu onClick={this.handleSysMenuClick}>
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
        </div>
        );
    }
    componentDidMount(){
        this.setState({
            collapsed: this.props.collapsed,
            sysMenu:[{
                key:'logout',
                name:'退出登录'
            },{
                key:'person',
                name:'个人中心'
            }]
         });
    }

    handleCollapse(){
        this.setState({
           collapsed: !this.state.collapsed
        });
        this.props.handleCollapse();
    }

    getSysMenu(){
        this.setState({
            sysMenu:[{
                key:'logout',
                name:'退出登录'
            }]
        });
    }

    handleSysMenuClick=(item:any)=>{
        if(item.key==='logout'){
            this.props.history.push("/login");
        }
    }


}

export default withRouter(AppHeader);
