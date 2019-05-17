const path=require('path');
module.exports={
    dev:{
        assetsPublicPath:'/',
        server:{
            host:'10.180.171.54',
            port:8088,
            compress:true,
            autoOpenBrowser:true
        }
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath:'/static',
        shouldUseSourceMap:true
    }
}