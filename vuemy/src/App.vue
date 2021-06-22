<template>
 <div>
   <my1></my1>
   <div id="my1"></div>
   <div id="router">
     <router-link to="/my1">my1</router-link>
     <router-link to="/my2">my2</router-link>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
import my1 from "./components/my1.vue"
import my2 from "./components/my2.vue"
export default {
  name: 'App',
  components:{
    my1,
    my2
  }
}
</script>

<style scoped>
#router{
  padding: 10px;
  background-color: aqua;
  text-align: center;
  margin: 10px auto;
  width: 60%;
}
</style>
