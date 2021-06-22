<template>
  <div id="my1" @click="cb1">
<div v-cloak>这是{{name}}的{{type}}</div>
<my-2></my-2>
  </div>
</template>

<script>
import my2 from "./my2.vue"
export default {
  name:"my1",
  data () {
    return {
      name:"my1",
      type:"组件(component)"
    }
  },
  methods: {
    cb1(e){
      console.log(e)
      console.log(this.name)
    }
  },
  components: {
    my2
  }
}
</script>

<style scoped>
#my1{
color: white;
width: 30vw;
padding: 20px 20px;
margin: auto;
background: indianred;
text-align: center;
line-height: 10vh;
}
</style>
