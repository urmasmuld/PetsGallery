<template>
  <div class="pets">
    <router-link :to="{ name: 'NewPet', params: { userId: userId }}">Lisa uus lemmik</router-link>
    <h1> Kasutaja <b>{{ userId }}</b> lemmikloomad</h1>
<div class="boxes">
  <div class="project"      
  v-for="pets in petsFromServer" 
      :key="pets" 
      >
    <div class="project__image"> 
      <img v-bind:src="'/images/Lemmikloomad/'+pets.pilt" v-bind:alt="pets.loomaNimi">
       </div>
    <div class="project__text">
     <li> Omanik: <b>{{ pets.omanik }}</b></li>
  <li>Lemmiku nimi: <b>{{ pets.loomaNimi }}</b></li> 
      <li> Lemmiku liik: <b>{{ pets.liik }}</b> </li>
      <li> Lemmiku vanus: <b>{{ pets.vanus }}</b> </li>
      <li> Lemmiku sugu: <b>{{ pets.sugu }}</b> </li>
      <li> Lemmiku v2limus: <b>{{ pets.v2limus }}</b> </li>
      <li> Lemmiku iseloom: <b>{{ pets.iseloom }}</b> </li>
    </div>
    </div>
  </div>
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

            const petsFromServer = ref([])

            async function getPets () {
                const pets = ref([])
                const result = await axios.get('/api/get-pets-data')
                pets.value = result.data
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

<style scoped>

h1 {
      margin-bottom: 5rem;
}
body{
    justify-content: center;
    margin: 0px;
    padding: 0px;
}
.boxes {
  margin: auto;
  display: inline-block;
}
.project {
	display:flex;
	justify-content:space-between;
  list-style-type: none;
  }

  .project__image, .project__text {
    margin-right: 0px;
    margin-bottom: 0px;
    padding:25px;
       
    }

.project:nth-child(2n) {
  flex-direction: row-reverse;
}

img {
    vertical-align: middle;
    border-style: none;
    height: 200px;
    width: auto;
    border: 2px solid rgb(79, 48, 190);
    border-top-left-radius: 15%;
    border-bottom-right-radius: 15%;

}

</style>