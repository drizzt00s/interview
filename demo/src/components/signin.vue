<template>
  <div class="sign">
    <label>Please Enter Your Nickname to signin</label>
    <input type="text" id="signupNick" v-model="nickName" />
    <router-link to='/' replace>home</router-link>
    <router-link to='/register' replace>register</router-link>
    <router-link to='/secrete' replace>secrete page</router-link>
    <button @click="signin">signin</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: 'Sign',
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
    signin(){
      const that = this;
      if(this.nickName.length <= 0){
        that.$store.commit('exceptionHandle','empty');
        return false;
      }
      $.ajax({
        url:"http://localhost:3001/sign_in",
        dataType:"json",
        type:'post',
        data:{
          nickName:this.nickName
        },
        success:function (data) {
          if(data.error){
            that.$store.commit('exceptionHandle',data.msg);
          }else{
            alert(`You are now sigin with nick name ${data.nickname}`);
            const token = data.token;
            that.$store.commit('setToken',token);
            that.$store.commit('setLoginStatus');
            that.$router.push('/secrete');
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
