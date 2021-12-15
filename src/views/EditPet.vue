<template>
  
  <div class="editPet">
   <Nav/>
   <EditPet />
   <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import EditPet from "@/components/EditPet.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "detail",
  components: {
    Nav,
    EditPet,
    Footer,
  },
};
</script>
