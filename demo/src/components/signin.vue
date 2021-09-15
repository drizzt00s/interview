<template>
  <div class="sign">
    <label>Please Enter Your Nickname to signin</label>
    <input type="text" id="signupNick"/>
    <router-link to='/' replace>home</router-link>
    <router-link to='/login' replace>login</router-link>
    <button @click="signin">signin</button>
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data () {
    return {

    }
  },
  methods:{
    signin(){

    }
  }
}
</script>


<style scoped>

</style>
