<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HomePage />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomePage from "@/components/HomePage.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Home",
  components: {
    // HelloWorld,
    HomePage,
    Footer
  },
};
</script>
