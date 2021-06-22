<template>
  <div id="my2" @click="cb2">
<div v-cloak>这是{{name}}的{{type}}</div>
  </div>
</template>

<script>
export default {
    name:'MY2',
  data () {
    return {
        name:"my2",
        type:"组件"
    }
  },
  methods: {
      cb2(e){
          console.log(this.name)
      }

  },
  components: {

  }
}
</script>

<style scoped>
#my2{
    margin: auto;
    width: 30%;
    padding: 5px;
    background-color: green;
    color: white;
}
</style>
