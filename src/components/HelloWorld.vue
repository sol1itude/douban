<template>
  <div class="hello">
    <button type="button" @click="axios">axios</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    axios(){
      this.$http.get('/api/movie/in_theaters').then( res => {
        console.log(res);
      }).catch( err => {
        console.log(err);
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.hello{
  p{
    color: red;
  }
}
</style>
