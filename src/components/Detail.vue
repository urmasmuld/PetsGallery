<template>
<div class="container-fluid">
  <div class="row pets mb-5">
    <div class="col">
    
      <h1 class="m-3"> Kasutaja <b>{{ userId }}</b> lemmikloomad</h1>
      <div class="add my-3 h3"><router-link :to="{ name: 'NewPet', params: { userId: userId }}">Lisa uus lemmik</router-link></div>
    </div>
  </div>

<div class="project-container">
  <div class="row project"
      v-for="pets in petsFromServer" 
      :key="pets" 
      > 
    <div class="col-6 d-block m-auto">
          <div class="project__image"> 
            <img v-bind:src="pets.pilt" v-bind:alt="pets.loomaNimi">
          </div>
    </div>
    <div class="col-6 d-block m-auto">
      <div class="textbox">
          <div class="project__text">
                <li>Lemmiku nimi: <b>{{ pets.loomaNimi }}</b></li> 
                <li> Lemmiku liik: <b>{{ pets.liik }}</b> </li>
                <li> Lemmiku vanus: <b>{{ pets.vanus }}</b> </li>
                <li> Lemmiku sugu: <b>{{ pets.sugu }}</b> </li>
                <li> Lemmiku välimus: <b>{{ pets.v2limus }}</b> </li>
                <li> Lemmiku iseloom: <b>{{ pets.iseloom }}</b> </li>
          </div>
      </div>
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
      text-transform: uppercase;
}

.project-container {
  border:solid black 3px;
  border-radius: 25px;
  margin: 30px;
  padding: 25px;
  
}

.project {
	display:flex;
	list-style-type: none;
  margin-left:30px;
  margin-right:30px;
  text-align: left;
    
  }

  .project__text, .project__image {
    padding:35px;
    }
  
  .project__text{
   padding-top:50px;
   padding-bottom:50px;
   font-size: 1.5rem;
   line-height: 2;
   letter-spacing:2px;
   
   }
  
.row:nth-child(2n+0) {
  flex-direction: row-reverse;
  text-align: right;
}

img {
    
    display: block;
    justify-content:center;
    align-items:center;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
    border: 3px solid rgb(79, 48, 190);
    border-radius: 25px;
    /* border-top-left-radius: 15%;
    border-bottom-right-radius: 15%; */
}
.textbox{
  border: solid orange 3px;
  border-radius: 25px;
}

</style>