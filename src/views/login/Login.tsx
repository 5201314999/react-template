import * as React from 'react';

import * as Styles from './Login.scss';

import {Icon} from 'antd';

export default class Login extends React.Component{
    render(){
        return (
            <div className={Styles.loginWrapper}>
                <div className={Styles.form}>
                    <header>
                        <h2>登录</h2>
                        <div className={Styles.imgWrapper}><Icon type="close" /></div>
                    </header>
                    <div className={Styles.inputBox}>
                        <input type="text" placeholder="请输入手机号或邮箱"/>
                    </div>
                    <div className={Styles.inputBox}>
                        <input type="password" placeholder="请输入密码"/>
                    </div>
                    <button className={Styles.primaryBtn}>登录</button>
                    <div className={Styles.extra}>
                        <span className={Styles.text}>没有账号<a>注册</a></span>
                        <a>忘记密码</a>
                    </div>
                    <div className={Styles.otherWay}>
                        <div className={Styles.desc}>第三方账号登录:</div>
                        <div className={Styles.imgBox}>
                            <div className={Styles.imgBg}>
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" alt="微博"/>
                            </div>
                            <div  className={Styles.imgBg}>
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" alt="微信"/>
                            </div>
                            <div  className={Styles.imgBg}>
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" alt="github"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
   }
}