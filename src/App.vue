<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

}
</script>
<style>
  body{
    background-color: #822544;
  }
  @media screen and (max-width: 800px) {
    body {
      background-color: #f2f3f7;
    }
  }
  #app{
    background: none !important;
  }
</style>
