<template>
  
  <div class="detail">
   <Nav/>
   <Detail />
   <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Detail from "@/components/Detail.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "detail",
  components: {
    Detail,
    Nav,
    Footer,
  },
};
</script>
