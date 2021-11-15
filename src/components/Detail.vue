<template>
  <div class="pets">
    <h1>Siia teeme kasutajapõhise dünaamilise lehe</h1>
    <h2>Valisid kasutaja: <b>"{{ userId }}"</b></h2>
<!-- See kood tuleb asendada siis meie disainiga :) -->
    <ul class="list-group mb-3">
      <li 
      v-for="pets in petsFromServer" 
      :key="pets" 
      class="list-group-item"
      >
         Omanik: <b>{{ pets.omanik }}</b> | Lemmiku nimi: <b>{{ pets.loomaNimi }}</b> | Lemmiku liik: <b>{{ pets.liik }}</b>
      </li>
    </ul>
    <div><router-link  to="/">Mine tagasi</router-link></div> <!-- Katsetuseks tagasi link -->

<!-- siin lõpeb lisatav kood -->
  </div>
</template>

<script>
import { ref,computed } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"
export default {
  name: "View",
  props: {
    msg: String,
  },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId)
// console.log(userId.value) // Logime kasutajanime

            const petsFromServer = ref([])

            async function getPets () {
                const pets = ref([])
                const result = await axios.get('/api/get-pets-data')
                pets.value = result.data
                // console.log(result.data)
                const petsByOwner = pets.value.filter(d => d.omanik === userId.value)
                petsFromServer.value = petsByOwner
                console.log('petsByOwner: ', petsByOwner)
            }
getPets ()

    return {
      userId,
      petsFromServer,
    };
  },
};
</script>
