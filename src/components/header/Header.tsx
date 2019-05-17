import * as styles from './Header.scss';
import React from 'react';
import logo from '../../images/logo.png';
import {Button} from 'antd';

import * as person from '@/utils/test.ts';
interface IProps {
    name:string
}

class Header extends React.Component < IProps > {
    public render() {
        const { name } = this.props;
        return (
            <div className={styles.header}>
               <Button type="primary" icon="search">Search</Button>
                <span className={styles.red}>{this.props.name}</span>
                <img  src={logo} alt="logo" />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log(person.name);
        this.testSourceMap(15);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount'); 
    }

    testSourceMap(a:number){
        console.log(a);
        // let b:any;
        // console.log(b.dd);
    }

}

export default Header;