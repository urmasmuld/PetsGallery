<template>
<div class="container-fluid">
  <div class="row pets mb-5">
    <div class="col">
    
      <h1 class="m-3"> Kasutaja <b>{{ userId }}</b> lemmikloomad</h1>
      <div v-if="tokenexists && useremail.substring(0, useremail.indexOf('.')) == userId.toLowerCase()" class="add my-3 h3"><router-link :to="{ name: 'NewPet', params: { userId: userId }}">Lisa uus lemmik</router-link></div>
      <!-- <div>Email: {{ useremail }} | PetOwner: {{ userId.toLowerCase() }}</div> -->
    </div>
  </div>


<ul id="pagination">
  <li v-for="(page, index) in pagination.totalPages" :key="index" @click="getPets(page)">

  <button 
  class="btn mr-3 p-3"
  :disabled="page === pagination.page"
  >
  {{ page }}
  </button>
  
  </li>
</ul>


<div class="project-container">
  <div class="row project"
      v-for="pets in petsFromServer" 
      :key="pets" 
      > 
    <div class="col-6 d-block m-auto">
          <div class="project__image"> 
            <img v-bind:src="pets.pilt64_s" v-bind:alt="pets.loomaNimi">
            <!-- <img v-bind:src="'/images/Lemmikloomad/'+pets.pilt" v-bind:alt="pets.loomaNimi"> -->
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
                <li>
                  Kommentaarid: 
                  <div v-for="(comments, index) in pets.kommentaarid" :key="index">
                    #{{ index+1 }} {{  }} <!-- See näitab kommentaari numbrit -->
                    <b>{{ comments.message }} </b> <br> <!-- Kommentaari sisu -->
                    Lisas: <b>{{ comments.username }}</b> <!-- kommentaari lisaja -->
                  </div>
                </li>
          </div>
           <div class="row">
            <div class="col-6">
            <button v-if="tokenexists && useremail.substring(0, useremail.indexOf('.')) == userId.toLowerCase()" class="btn mr-3 p-3 mb-5">
              <router-link :to="{ name: 'EditPet', params: { 
              userId: pets.userId,
              omanik: pets.omanik,
              pet_id: pets._id,
              pet_name: pets.loomaNimi,
              species: pets.liik,
              age: pets.vanus,
              gender: pets.sugu,
              appearance: pets.v2limus,
              character: pets.iseloom
               }}" style="text-decoration: none;color: inherit;">Muuda lemmiklooma infot</router-link>
               </button>
            </div>
            <div class="col-6">
            <button v-if="tokenexists && useremail.substring(0, useremail.indexOf('.')) == userId.toLowerCase()" @click="deletePets(pets._id)" class="btn mr-3 p-3 mb-5">Kustuta lemmikloom</button>
            </div>

            <div class="col-6">
              <p>
                <label for="comments-username">Kasutaja </label>
                <input
                  id="comments-username"
                  v-model="comments.username"
                  type="text"
                  name="comments-username"
                />
              </p>
            </div>
            <div class="col-6">
              <p>
                <label for="comments-message">Kommentaar </label>
                <input
                  id="comments-message"
                  v-model="comments.message"
                  type="text"
                  name="comments-message"
                />
              </p>
            </div>
            <div class="col-6">
              <button @click="addComment(pets._id)" class="btn mx-4 p-2 mb-4">
                Lisa kommentaar
              </button>
            </div>

        </div>
      </div>
    </div>
  </div>
</div>

<ul id="pagination">
  <li v-for="(page, index) in pagination.totalPages" :key="index" @click="getPets(page)">

  <button 
  class="btn mr-3 p-3"
  :disabled="page === pagination.page"
  >
  {{ page }}
  </button>
  
  </li>
</ul>


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
  data() {
    function clear() {
      localStorage.clear();
      //  console.log(localStorage.getItem("token"));
    }
    return {
      tokenexists: localStorage.getItem("token"),
      useremail: localStorage.getItem("email"),
      // useremail: localStorage.getItem("email").substring(0, localStorage.getItem("email").indexOf(".")),
      clear,
    };
  },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId)
            const petsFromServer = ref([])
            const pagination = ref({totalPages: [], page: 1})

    const comments = ref({
      message: "",
      username: "",
    });
    async function addComment(id) {
      await axios.post("/api/add-comment/" + id, {
        message: comments.value.message,
        username: comments.value.username,
      });
      comments.value.message = "";
      comments.value.username = "";
      await getPets();
    }

            async function getPets(page = 1) {
                const pets = ref([])
                const result = await axios.post('/api/get-pets-data/'+ userId.value, 
                {
                  page: page
                },
                )
                // console.log(result.data)
                pets.value = result.data.docs
                pagination.value.totalPages = Array(result.data.totalPages).fill(0).map((page,index) => index + 1)
                pagination.value.page = result.data.page
                console.log("Page: " + pagination.value.page)
                const petsByOwner = pets.value
                petsFromServer.value = petsByOwner
                // console.log('petsByOwner: ', petsByOwner)
                const pagingData = result.data
                return pagingData;
            }
getPets ()
// Delete
    async function deletePets(id) {
      const result = await axios.get("/api/delete-pets/" + id, {headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
        );
        result.data
      await getPets();
    }
    return {
      userId,
      petsFromServer,
      deletePets,
      getPets,
      pagination,
      comments,
      addComment,
    };
  },
};
</script>

<style scoped>
#pagination li {
  display:inline;
}
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
button {
    border: 3px solid rgb(79, 48, 190);
    border-radius: 25px;
}
</style>