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

  </p>

   <p>
    <label for="species">Liik</label>
    <input
      id="species"
      v-model="state.species"
      type="text"
      name="species" required>
  </p>

  <p>
    <label for="age">Vanus</label>
    <input
      id="age"
      v-model="state.age"
      type="number"
      name="age"
      min="0" required
    >
  </p>

  <p>
    <label for="gender">Sugu</label>
    <select
      id="gender"
      v-model="state.gender"
      name="gender" required
    >
      <option>Emane</option>
      <option>Isane</option>
    </select>
  </p>

    <p>
    <label for="appearance">Välimus</label>
    <input
      id="appearance"
      v-model="state.appearance"
      type="text"
      name="appearance" required
    >
  </p>
  
    <p>
    <label for="character">Iseloom</label>
    <input
      id="character"
      v-model="state.character" 
      type="text"
      name="character" required
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

<p
  v-for="error of v$.$errors"
  :key="error.$uid"
>
<strong>{{ error.$validator }}</strong>
<small> on property</small>
<strong>{{ error.$property }}</strong>
<small> says:</small>
<strong>{{ error.$message }}</strong>
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
import { ref,computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { link } from "fs";
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'



export default {
  name: "AddNewPet",
  props: {
    title: String,
  },

  setup() {

//     const validations = {
//     pet_name: {
//     required: helpers.withMessage('See väli ei saa olla tühi', required)
//   }
// }

    const state = reactive({
      pet_name: '',
      species: '',
      age: '',
      gender: '',
      appearance: '',
      character:'',
    })

    const rules = {
      pet_name: {
        required: helpers.withMessage('See väli ei saa olla tühi', required)
        },
        
      species: { required: helpers.withMessage('See väli ei saa olla tühi', required)
        },
      age: {required },
      gender: { required },
      appearance: { required },
      character:{ required },
    }

    // const = helpers;
    const v$ = useVuelidate(rules, state);
    const pet_name = ref("");
    const species = ref("");
    const age = ref (Number);
    const gender = ref("");
    const appearance = ref("");
    const character = ref("");
    const picture = ref(link);
    const route = useRoute();
    const userId = computed(() => route.params.userId)

    async function addPet() { //async submitForm () 
     
    const isFormCorrect = await this.v$.$validate() //valideerib vormi enne saatmist (pärast submit nupu vajutamist)
    
    console.log(isFormCorrect) //kontrolliks väljalogimine - true/false
    console.log(v$.$errors) 

    if (!isFormCorrect) return //kui vormil ei ole nõutud väljad täidetd, siis uut looma baasi ei lisa/ei submitti

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

      pet_name.value = "";
      species.value = "";
      age.value = "";
      gender.value = "";
      appearance.value = "";
      character.value = "";
      picture.value = "";
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
      // validations
      
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