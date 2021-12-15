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
    @click="editPet"
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
// import { link } from "fs";
import router from "./../router"

// let myVar = ''

export default {
  name: "editPet",
  props: {
    title: String,
  },


  setup() {
    const pet_id = computed(() => route.params.pet_id);
    const pet_name = computed(() => route.params.pet_name);
    const species = computed(() => route.params.species);
    const age = computed(() => route.params.age);
    const gender = computed(() => route.params.gender);
    const appearance = computed(() => route.params.appearance);
    const character = computed(() => route.params.character);
    // const picture = ref(link);
    const route = useRoute();
    const userId = computed(() => route.params.userId);


    async function editPet() {
      await axios.post("/api/edit-pet", {
        omanik: userId.value,
        loomaNimi: pet_name,
        liik: species,
        vanus: age,
        sugu: gender,
        v2limus: appearance,
        iseloom: character,
        // pilt: myVar,
      });
      router.push({ name: 'detail', params: {userId: userId.value}});
    }

    return {
      editPet,
      route,
      userId,
      pet_id,
      pet_name,
      species,
      age,
      gender,
      appearance,
      character,
    //   picture,
    //   v$,
    //   state,
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