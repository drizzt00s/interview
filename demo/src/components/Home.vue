<template>
  <div class="home">
    home page
    <router-link to='/signin' replace>signin</router-link>
    <router-link to='/login' replace>login</router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
