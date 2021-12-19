<template>
  <div class="signup">
   <Nav/>
   <Signup/>
   <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Signup from "@/components/Signup.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "signup",
  components: {
    Nav,
    Signup,
    Footer,
    
  },
};
</script>
