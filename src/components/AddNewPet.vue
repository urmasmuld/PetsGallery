<template>
<div class="addnew">
  <p>
    <label for="name">Omanik</label>

    <input
      id="name"
      type="text"
      name="name"
      v-model="userId"
      disabled
    >
  </p>

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
      name="species"
    >
  </p>

  <p>
    <label for="age">Vanus</label>
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
      min="0"
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
    <label for="picture">Link pildile</label>
    <input
      id="picture"
      v-model="picture"
      type="link"
      name="picture"
    >
  </p>

  <p>
    <input
    @click="addPet"
      type="submit"
      value="Submit"
    >
  </p>

</div>
</template>

<script>
import { ref,computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { link } from "fs";
export default {
  name: "AddNewPet",
  props: {
    title: String,
  },

  setup() {
    const pet_name = ref("");
    const species = ref("");
    const age = ref (Number);
    const gender = ref("");
    const appearance = ref("");
    const character = ref("");
    const picture = ref(link);
    const route = useRoute();
    const userId = computed(() => route.params.userId)

    async function addPet() {
      await axios.post("/api/add-pets", {
        omanik: userId.value,
        loomaNimi: pet_name.value,
        liik: species.value,
        vanus: age.value,
        sugu: gender.value,
        v2limus: appearance.value,
        iseloom: character.value,
        pilt: picture.value,
      });
    }
    return {
      addPet,
      route,
      userId,
      pet_name,
      species,
      age,
      gender,
      appearance,
      character,
      picture,
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
}
</style>