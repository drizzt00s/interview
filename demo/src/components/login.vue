<template>
  <div class="login">
    <label>Please Enter Your Nickname to login</label>
    <input type="text" id="signupNick" v-model="nickName" />
    <span class="error hide"></span>
    <router-link to='/' replace>home</router-link>
    <router-link to='/signin' replace>sighin</router-link>
    <button @click="login">login</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Login',
  data () {
    return {
      nickName:''

    }
  },
  methods:{
    login(){
      if(this.nickName.length <= 0){
        this.$store.commit('exceptionHandle','empty');
        return false;
      }
      $.ajax({
        url:"/user_login",
        dataType:"json",
        success:function (msg) {

        }
      });
    }
  },
  mounted() {

  }
}
</script>


<style scoped>

</style>
