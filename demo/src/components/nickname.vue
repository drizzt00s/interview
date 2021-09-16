<template>
  <div class="nickname">
    You are now login as nickname:
    {{this.$store.state.nickName }}
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: 'NickName',
  data () {
    return {
      nickName:''
    }
  },
  methods:{

  },
  mounted() {

  },


}
</script>


<style scoped>

</style>
