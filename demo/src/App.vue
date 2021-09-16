<template>
  <div id="app">
    <Nickname/>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import Nickname from './components/nickname'
export default {
  data () {
    return {
      isLogin:false
    }
  },
  name: 'App',
  components: {
    Home,
    Nickname
  },
  methods:{
    checkLogStatus(){
      return this.$store.state.isLogin;
    }
  },
  mounted() {
    this.isLogin = this.checkLogStatus();
    // alert(this.isLogin )
  }
}
</script>

<style>
#app {

}
</style>
