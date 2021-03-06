import * as types from './types.js'

//关于token的存放位置
//1.只用vuex存储：刷新页面vuex重新初始化，token消失导致需要重新登录
//2.window.sessionStorage: 初始化的时候用sessionStorage来赋值，刷新页面重新初始化，但因为sessionStorage里面存有token有值，
//那么state.token就有值了,vue-router就不会拦截，则无需重新登录。（这个demo用的是这种）
//3.window.localStorage: 初始化的时候用localStorage来赋值，这种情况跟sessionStorage差不多。后台配合给长时间有效的token比较好,
//如果token的有效期比较短，直接有sessionStorage比较好。

const mutations = {
    [types.LOGIN]: (state, data) => {
        //更改token的值
        state.token = data;
        window.sessionStorage.setItem('token', data);
        window.sessionStorage.setItem('admin', data);
        window.sessionStorage.setItem('id', data);
        window.sessionStorage.setItem('user', data);
        window.sessionStorage.setItem('company', data);
    },
    [types.LOGOUT]: (state) => {
        //登出的时候要清除token admin
        state.token = null;
        window.sessionStorage.removeItem('token');
        state.admin = null;
        window.sessionStorage.removeItem('admin');
        state.id = null;
        window.sessionStorage.removeItem('id');
        state.user = null;
        window.localStorage.removeItem('user');
        state.company = null;
        window.sessionStorage.removeItem('company');
    },
    [types.PERIODS]: (state, data) => {
        state.periods = data;
    },
    [types.COMPANYS]: (state, data) => {
        state.companys = data;
    },
    [types.PRODS]: (state, data) => {
        state.prods = data;
    },
    [types.ClAARR]: (state, data) => {
        state.claarr = data;
    },
    [types.ADMIN]: (state, data) => {
        //把adimn存起来
        state.admin = data;
        window.sessionStorage.setItem('admin', data);
    },
    [types.USER]: (state, data) => {
        //把adimn存起来
        state.user = data;
        window.sessionStorage.setItem('user', data);
    }
/*    //这步可有可无，根据自己需求去写
    [types.COMPANY]: (state, data) => {
        //把用户名存起来
        state.company = data;
        window.sessionStorage.setItem('company', data);
    },
    [types.ID]: (state, data) => {
        //把adimn存起来
        state.id = data;
        window.sessionStorage.setItem('id', data);
    },
    [types.MESSAGE]: (state, data) => {
        //把adimn存起来
        state.msg = data.msg;
        state.message = data.message;
        setTimeout(function(){
            state.msg=false;
        },4000)
    }*/
};

export default mutations;
