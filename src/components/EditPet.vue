<template>
<div class="editpet">
   <p>
    <label for="pet_name">Looma nimi</label>
    <input
      id="pet_name"
      v-model="pet_name"
      type="text"
      name="pet_name"
    >
    </p>
   
     <p>
    <label for="species">Liik</label>
    <input
      id="species"
      v-model="species"
      type="text"
      name="species">
  </p>

  <p>
    <label for="age">Vanus</label>
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
     
    >
  </p>

  <p>
    <label for="gender">Sugu</label>
    <select
      id="gender"
      v-model="gender"
      name="gender"
    >
      <option>Emane</option>
      <option>Isane</option>
    </select>
  </p>

    <p>

    <label for="appearance">Välimus</label>
    <input
      id="appearance"
      v-model="appearance"
      type="text"
      name="appearance"
    >
  </p>
  
    <p>
    <label for="character">Iseloom</label>
    <input
      id="character"
      v-model="character" 
      type="text"
      name="character"
    >
  </p>

  <p>
    <button
    @click.prevent="editPet"
      type="submit"
      value="Submit"
    >Salvesta</button>
  </p>

</div>
</template>

<script>
import { computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import router from "./../router"

export default {
        data(){
        return{
              // omanik:this.$route.params.omanik,
              pet_name:this.$route.params.pet_name,
              species:this.$route.params.species,
              age:this.$route.params.age,
              gender:this.$route.params.gender,
              appearance:this.$route.params.appearance,
              character:this.$route.params.character,
         }
    },
  name: "editPet",
  props: {
    title: String,
  },


  setup() {
    const pet_id = computed(() => route.params.pet_id);
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const omanik = computed(() => route.params.omanik);


    async function editPet() {
        let pet_name = document.getElementById("pet_name").value;
        let species = document.getElementById("species").value;
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        let appearance = document.getElementById("appearance").value;
        let character = document.getElementById("character").value;
      const result = await axios.post("/api/edit-pet", {
        pet_id: pet_id.value,
        omanik: userId.value,
        loomaNimi: pet_name,
        liik: species,
        vanus: age,
        sugu: gender,
        v2limus: appearance,
        iseloom: character,
        // pilt: myVar,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
      },
      });
      result.data
   
      router.push({ name: 'detail', params: {userId: omanik.value}});
    }

    return {
      editPet,
      route,
      userId,
      // omanik,
      pet_id,
    };

},

};
</script>
<style scoped>
body {
  justify-content: space-between;
  padding: 4px;
  margin-top: 0;
  margin-bottom: 1rem;
}
label {
  margin-inline: 1rem;
  /* float: left;  */
  width: 150px; 
  display: inline-block; 
  text-align: left; 
}
.editpet {
  width: 600px; 
  border: solid orange 3px;
  border-radius: 25px;
  margin: auto;
  padding: 25px;
  }
p {
  display: flex; 
}
button {
    border: 3px solid rgb(79, 48, 190);
    border-radius: 25px;
}
span {
  color: red;
  padding: 15px;
 }
</style>