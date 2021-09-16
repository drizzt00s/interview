<template>
  <div class="login">
    <label>Please Enter Your Nickname to register</label>
    <input type="text" id="signupNick" v-model="nickName" />
    <span class="error hide"></span>
    <router-link to='/' replace>home</router-link>
    <router-link to='/signin' replace>sighin</router-link>
    <router-link to='/secrete' replace>secrete page</router-link>
    <button @click="login">login</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Register',
  data () {
    return {
      nickName:'',
      isLogin:false
    }
  },
  methods:{
    checkLogStatus(){
      return this.$store.state.isLogin;
    },
    login(){
      const that = this;
      if(this.nickName.length <= 0){
        that.$store.commit('exceptionHandle','empty');
        return false;
      }
      $.ajax({
        url:"http://localhost:3001/sign_up",
        dataType:"json",
        type:'post',
        data:{
          nickName:this.nickName
        },
        success:function (data) {
          if(data.error){
            that.$store.commit('exceptionHandle', data.msg);
          }else{
            alert('login success, you can access the secrete page now.');
            const token = data.token;
            that.$store.commit('setToken',token);
            that.$store.commit('setLoginStatus');
            that.$store.commit('setNickName',data.nickname);
          }
        }
      });
    }
  },
  mounted() {
    this.isLogin = this.checkLogStatus();
  }
}
</script>


<style scoped>

</style>
