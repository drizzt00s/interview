import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    errorMsg:{
      empty:'Please enter your nickname',
      duplicated:'This nickname has already been taken,please pick a new one',
      error:"This nick name doesn't exist",
      violation:"You cannot use other user's nickname to log in directly,please use your own account to log in or register a new nickname"
    },
    token:null,
    isLogin:false
  },
  mutations:{
    exceptionHandle(state,errorType){
      switch (errorType){
        case errorType:
          alert(state.errorMsg[errorType]);
      }
    },
    setToken(state, token){
      state.token = token;
    },
    getLoginStatus(state){
      return state.isLogin;
    },
    setLoginStatus(state){
      state.isLogin = !state.isLogin;
    }
  },
  actions:{
  },
  getters:{

  },
  modules:{}
});

export default store;
