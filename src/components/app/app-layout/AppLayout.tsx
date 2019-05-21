import * as styles from "./AppLayout.scss";
import * as React from "react";
import * as Loadable from "react-loadable";
import { Route } from "react-router-dom";

import { Layout, Menu } from "antd";

import AppMenu from "@/components/app/app-menu/AppMenu";
import AppHeader from "@/components/app/app-header/AppHeader";
import AppFooter from "@/components/app/app-footer/AppFooter";

import logo from "@/images/logo.svg";

const { Header, Sider, Content } = Layout;

interface IProps {}

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
    return (
      <Layout className={styles.layout}>
        <Sider
          className={`${styles.appSider} ${
            this.state.collapse ? styles.collapseSider : ""
          }`}
        >
          <section className={styles.header}>
            <a className={styles.logo} href="#">
              <img src={logo} alt="logo" />
              <h1>hero中后台</h1>
            </a>
          </section>
          <AppMenu menus={this.state.menus} collapse={this.state.collapse} />
        </Sider>
        <Layout>
          <Header className={styles.antLayoutHeader}>
            <AppHeader collapse={false} handleCollapse={()=>this.handleCollapse()}/>
          </Header>
          <Content>
            {/* <Route key={} extact={true} path="" component={} /> */}
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
              name: "分析页",
              link: "/dashboard/analysis"
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
              name: "403",
              link: "/excpetion/403"
            },
            {
              key: "404",
              name: "404",
              link: "/excpetion/404"
            },
            {
              key: "500",
              name: "500",
              link: "/excpetion/403"
            }
          ]
        },
        {
          key: "setting",
          name: "系统设置",
          icon: "trophy",
          children: [
            {
              key: "authority",
              name: "权限管理",
              icon: "trophy",
              children: [
                {
                  key: "admin",
                  name: "管理员",
                  link: "/authority/admin"
                },
                {
                  key: "user",
                  name: "普通用户",
                  link: "/authority/user"
                }
              ]
            }
          ]
        }
      ]
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
