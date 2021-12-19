<template>
  <div class="login">
   <Nav/>
   <Login/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";


export default {
  name: "login",
  components: {
    Nav,
    Login,
    Footer,
    
  },
};
</script>

