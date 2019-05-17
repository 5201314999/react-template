import * as styles from "./AppLayout.scss";
import * as React from "react";
import { Layout, Icon, Menu, Dropdown } from "antd";

import AppMenu from "@/components/app/app-menu/AppMenu";
import AppFooter from "@/components/app/app-footer/AppFooter";

import logo from "@/images/logo.svg";
import avatar from "@/images/home/avatar.jpg";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

interface IProps {
  name: string;
}

interface IState {
  collapse?: boolean;
  sysMenu: any[];
  menus: any[];
  userName?: string;
}

class AppLayout extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    collapse: false,
    sysMenu: [],
    menus: [],
    userName: ""
  };

  constructor(props: IProps) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  render() {
    const menuLogo = this.state.collapse ? (
      <Icon type="menu-unfold" />
    ) : (
      <Icon type="menu-fold" />
    );
    return (
      <Layout className={styles.layout}>
        <Sider
          className={`${styles.appSider} ${
            this.state.collapse ? styles.collapseSider : ""
          }`}
        >
          {/* <section className={styles.header}>
            <a className={styles.logo} href="#">
              <img src={logo} alt="logo" />
              <h1>hero中后台</h1>
            </a>
          </section> */}
          <AppMenu menus={this.state.menus} collapse={this.state.collapse} />
        </Sider>
        <Layout>
          <Header className={styles.appHeader}>
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
          </Header>
          <Content>
            <Menu
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapse}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation two</span>
                  </span>
                }>
                      <Menu.Item key="8">Option 10</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  }

  componentDidMount() {
    //getMenu
    this.getMenu();
  }

  getMenu() {
    this.setState({
      menus: [
        {
          key: "Dashboard",
          name: "Dashboard",
          icon: "trophy",
          children: [
            {
              key: "analysis",
              name: "分析页"
            }
          ]
        },
        {
          key: "exception",
          name: "异常页",
          icon: "trophy",
          children: [
            {
              key: "403",
              name: "403"
            },
            {
              key: "404",
              name: "404"
            },
            {
              key: "500",
              name: "500"
            }
          ]
        },
        {
          key: "setting",
          name: "系统设置",
          icon: "trophy",
          children: [
            {
              key: "author",
              name: "权限管理",
              icon: "trophy",
              children: [
                {
                  key: "admin",
                  name: "管理员"
                },
                {
                  key: "user",
                  name: "普通用户"
                }
              ]
            }
          ]
        }
      ],
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
      userName: "超级管理员"
    });
  }

  // collapse or expand sider
  handleCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
}

export default AppLayout;
