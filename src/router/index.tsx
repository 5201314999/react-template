import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App'
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const dashboard=asyncComponent(()=>import('@/views/dashboard/Dashboard'));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
    render(){
      return(
        <HashRouter>
          <Switch>
            <Route path="/" exact component={dashboard} />
            <Route path="/dashboard" component={dashboard} />
            <Route path="/helpcenter" component={helpcenter} />
            <Route path="/production" component={production} />
            <Route path="/balance" component={balance} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      )
    }
  }



// const RouterMap = () => (
//     <Router>
//       <App>
//         <Switch>
//           {RouterList.map(item => (
//             <Route
//               key={item.path}
//               exact={true}
//               path={item.path}
//               component={Loadable({
//                 loader: item.component,
//                 loading
//               })}
//             />
//           ))}
//         </Switch>
//       </App>
//     </Router>
//   )