
// Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

import axios from 'axios';


//默认配置
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const base=(method,params,config,success,error)=>{
    axios({
        method:method,
        params:params,
        config:config
    }).then(response=>{
        if(response.status===200){
            success(response.data);
        }
    }).catch(err=>{
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    })

}

const get=(url,params,success,error,config)=>{
    base('get',url,params,success,error,config);
}

const post=(url,params,success,error,config)=>{
    base('post',url,params,success,error,config);
}

const put=(url,params,success,error,config)=>{
    base('put',url,params,success,error,config);
}

const delete=(url,params,success,error,config)=>{
    base('delete',url,params,success,error,config);
}

const patch=(url,params,success,error,config) =>{
    base('patch',url,params,success,error,config);
}


export default{
    get,
    post,
    delete,
    put
}