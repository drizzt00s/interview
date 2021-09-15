import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    errorMsg:{
      empty:'Please enter your nickname',
      duplicated:'This nickname has already been taken,please pick a new one',
      error:"This nick name doesn't exist"
    }
  },
  mutations:{
    exceptionHandle(state,errorType){
      switch (errorType){
        case 'empty':
          alert(state.errorMsg[errorType]);
      }
    },
    inc(state){
      state.msg++;
    },
    des(state){
      state.msg--;
    },
    addCount(state,value){
      state.msg = (state.msg) + value;
    }
  },
  actions:{
    updateMsg(context){

    }

  },
  getters:{
    // exceptionHandle(state,errorType){
    //   switch (errorType){
    //     case 'empty':
    //       alert(state.errorMsg.errorType);
    //
    //   }
    // }


    // powerMsg(state){
    //   return (state.msg)*(state.msg);
    // },
    // passing(state){
    //   return state.students.filter(function(s){
    //     return s.score > 60;
    //   })
    // }
  },
  modules:{}
});

export default store;
