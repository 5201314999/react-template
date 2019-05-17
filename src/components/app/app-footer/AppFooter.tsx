import * as React from 'react';
import {Layout} from 'antd';
import config from '@/common/config';

import * as Styles from './AppFooter.scss';

interface IProps{

}

const {Footer}=Layout;



class AppFooter extends React.Component<IProps>{
    render(){
        return (
            <Footer className={Styles.footer}>{config.copyText}</Footer>
        )
    }
}

export default AppFooter;



