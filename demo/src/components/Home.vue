<template>
  <div class="home">
    home page
    <router-link to='/signin' v-show="!isLogin" replace>signin</router-link>
    <router-link to='/register' v-show="!isLogin" replace>register</router-link>
    <router-link to='/secrete' replace>secrete page</router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      isLogin:false
    }
  },
  methods:{
    checkLogStatus(){
      return this.$store.state.isLogin;
    }
  },
  mounted() {
    this.isLogin = this.checkLogStatus();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
