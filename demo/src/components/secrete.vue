<template>
  <div class="secrete">
    This contents can only been viewed after login
    <router-link to='/' replace>Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Secrete',
  data () {
    return {

    }
  },
  methods:{

  },
  mounted() {
    if(!this.$store.state.token){
      alert('only user who login can access this.');
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>

</style>
