import * as styles from "./AppLayout.scss";
import * as React from "react";

import { Layout, Menu, Icon } from "antd";

import AppMenu from "@/components/app/app-menu/AppMenu";
import AppHeader from "@/components/app/app-header/AppHeader";
import AppContent from '@/components/app/app-content/AppContent';
import AppFooter from "@/components/app/app-footer/AppFooter";
import BreadCramb from '@/components/app/app-breadcrumb/AppBreadCrumb'

import logo from "@/images/logo.svg";
import {frameConfig} from '@/common/config';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

interface IProps {}

interface IState {
  collapsed?: boolean;
  sysMenu: any[];
  menus: any[];
  userName?: string;
}

class AppLayout extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    collapsed: false,
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
        <Sider className={styles.appSider} width={256} trigger={null} collapsible collapsed={this.state.collapsed}>
          <section className={styles.header}>
            <a className={styles.logo} href="#">
              <img src={logo} alt="logo" />
              <h1>{frameConfig.sysname}</h1>
            </a>
          </section>
          <AppMenu menus={this.state.menus} collapsed={this.state.collapsed} />
        </Sider>
        <Layout>
          <Header className={styles.antLayoutHeader}>
            <AppHeader
              collapsed={false}
              handleCollapse={() => this.handleCollapse()}
            />
          </Header>
          <Content>
              {frameConfig.showMode==='tabs'?undefined:<BreadCramb/>}
              <AppContent />
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
          icon: "crown",
          children: [
            {
              key: "analysis",
              name: "分析页",
              link: "/dashboard/analysis"
            }
          ]
        },
        {
          key: "buisness",
          name: "业务模块",
          icon: "gift",
          children: [
            {
              key: "table",
              name: "表格管理",
              link: "/bussiness/table"
            },{
              key: "log",
              name: "日志页面",
              link: "/bussiness/log"
            }
          ]
        },
        {
          key: "exception",
          name: "异常页",
          icon: "tool",
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
              icon: "car",
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

  // collapsed or expand sider
  handleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
}

export default AppLayout;
