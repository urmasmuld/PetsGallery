<template>
  
  <div class="newPet">
   <Nav/>
   <AddNewPet />
   <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import AddNewPet from "@/components/AddNewPet.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "detail",
  components: {
    Nav,
    AddNewPet,
    Footer,
  },
};
</script>
