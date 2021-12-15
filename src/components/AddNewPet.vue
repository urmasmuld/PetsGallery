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
      v-model="state.pet_name"
      type="text"
      name="pet_name"
      
    >
      <span v-if="v$.pet_name.$error">
        {{ v$.pet_name.$errors[0].$message }}
        </span>
        
    </p>
   
     <p>
    <label for="species">Liik</label>
    <input
      id="species"
      v-model="state.species"
      type="text"
      name="species">
      <span v-if="v$.species.$error">
        {{ v$.species.$errors[0].$message }}
      </span>
  </p>

  <p>
    <label for="age">Vanus</label>
    <input
      id="age"
      v-model="state.age"
      type="number"
      name="age"
     
    >
    <span v-if="v$.age.$error">
        {{ v$.age.$errors[0].$message }}
      </span>
  </p>

  <p>
    <label for="gender">Sugu</label>
    <select
      id="gender"
      v-model="state.gender"
      name="gender"
    >
      <option>Emane</option>
      <option>Isane</option>
    </select>
    <span v-if="v$.gender.$error">
        {{ v$.gender.$errors[0].$message }}
      </span>
  </p>

    <p>

    <label for="appearance">Välimus</label>
    <input
      id="appearance"
      v-model="state.appearance"
      type="text"
      name="appearance"
    >
    <span v-if="v$.appearance.$error">
        {{ v$.appearance.$errors[0].$message }}
      </span>
  </p>
  
    <p>
    <label for="character">Iseloom</label>
    <input
      id="character"
      v-model="state.character" 
      type="text"
      name="character"
    >
    <span v-if="v$.character.$error">
        {{ v$.character.$errors[0].$message }}
      </span>
  </p>

    <p>
    <label for="picture">Pilt</label>
    <input
      type="file"
      id="picture"
      name="picture"
      @change="onFileSelected"
    >
  </p>

  <p>
    <button
    @click="addPet"
      type="submit"
      value="Submit"
    >Salvesta</button>
  </p>

</div>
</template>

<script>
import { ref,computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { link } from "fs";
import useVuelidate from "@vuelidate/core";
import { required, helpers, } from "@vuelidate/validators";
import router from "./../router"

let myVar = ''

export default {
  name: "AddNewPet",
  data () {
    return {
      selectedFile: null
    }
  },
    methods: {
        onFileSelected(event) {
          console.log(event)
          this.selectedFile = event.target.files[0]
          myVar = this.selectedFile.name
          // console.log(myVar)
        }
    },
  props: {
    title: String,
  },

  setup() {
    const state = reactive({
      pet_name: "",
      species: "",
      age: "",
      gender: "",
      appearance: "",
      character: "",
    });
    const rules =  {
      pet_name: { required: helpers.withMessage("Looma nimi on kohustuslik, palun täida!", required)},
      species: { required: helpers.withMessage("Loomaliik on kohustuslik, palun täida!", required)},
      age: { required: helpers.withMessage("Vanus on kohustuslik, palun täida!", required)},
      gender: { required: helpers.withMessage("Sugu on kohustuslik, palun vali!", required)},
      appearance: { required: helpers.withMessage("Välimus on kohustuslik, palun täida!", required)},
      character: { required: helpers.withMessage("Iseloom on kohustuslik, palun täida!", required)},
    };

    const v$ = useVuelidate(rules, state);
    const pet_name = ref("");
    const species = ref("");
    const age = ref(Number);
    const gender = ref("");
    const appearance = ref("");
    const character = ref("");
    const picture = ref(link);
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    async function addPet() {
      //async submitForm ()
      const isFormCorrect = await this.v$.$validate(); //valideerib vormi enne saatmist (pärast submit nupu vajutamist)
      console.log(isFormCorrect); //kontrolliks väljalogimine - true/false
      // console.log(v$.$errors);
      if (!isFormCorrect) {
        return } 
      await axios.post("/api/add-pets", {
        omanik: userId.value,
        loomaNimi: state.pet_name,
        liik: state.species,
        vanus: state.age,
        sugu: state.gender,
        v2limus: state.appearance,
        iseloom: state.character,
        pilt: myVar,
      });
      router.push({ name: 'detail', params: {userId: userId.value}});
      // pet_name.value = "";
      // species.value = "";
      // age.value = "";
      // gender.value = "";
      // appearance.value = "";
      // character.value = "";
      // imgdata.value = "";
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
      v$,
      state,
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
  float: left; 
  width: 150px; 
  display: inline-block; 
  text-align: left; 
}
.addnew {
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