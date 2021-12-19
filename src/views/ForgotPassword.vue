<template>
  <div class="forgot-password">
   <Nav/>
   <ForgotPassword/>
   <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "forgot-password",
  components: {
    Nav,
    ForgotPassword,
    Footer,
  },
};
</script>
