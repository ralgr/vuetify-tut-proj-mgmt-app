<template>
  <v-app dark
         class="grey darken-4">

    <Navbar/>

    <v-content class="mx-4 my-4">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
