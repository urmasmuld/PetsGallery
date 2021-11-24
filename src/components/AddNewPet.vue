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
      type="number"
      name="age"
      min="0"
    >
  </p>

  <p>
    <label for="gender">Sugu</label>
    <select
      id="gender"
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
      type="text"
      name="appearance"
    >
  </p>
  
    <p>
    <label for="character">Iseloom</label>
    <input
      id="character"
      type="text"
      name="character"
    >
  </p>

    <p>
    <label for="picture">Link pildile</label>
    <input
      id="picture"
      type="link"
      name="picture"
    >
  </p>

    <p>
    <label for="add">Lisainfo</label>
    <input
      id="add"
      type="text"
      name="add"
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
export default {
  name: "AddNewPet",
  props: {
    title: String,
  },

  setup() {
    const pet_name = ref("");
    const species = ref("");
    const route = useRoute();
    const userId = computed(() => route.params.userId)

    async function addPet() {
      await axios.post("/api/add-pets", {
        omanik: userId.value,
        loomaNimi: pet_name.value,
        liik: species.value,
        vanus: 115,
        sugu: "TestX",
        v2limus: "TestX",
        iseloom: "TestX",
        pilt: "TestX",
        lisainfo: "TestX",
      });
    }
    return {
      addPet,
      route,
      userId,
      pet_name,
      species,
    };

},

};
</script>
