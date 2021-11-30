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
    <label for="picture">Pilt</label>
    <input
      id="picture"
      type="file"
      name="picture"
      @change="convert"
    >
    <input
      id="imgdata" 
      type="hidden" 
      v-model="imgdata" 
      name="imgdata" 
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
    const imgdata = ref("");

// Base64/image start
			function convert() {
				var data = document.getElementById("picture").files[0];
					loadImageFileAsURL(data);
			}
			
			async function loadImageFileAsURL(fileToLoad){
				var fileReader = new FileReader();
				fileReader.onload = async function(fileLoadedEvent) {
          const base64 = await resizeBase64Img(fileLoadedEvent.target.result, 500, 500)
					// imgdata.value = fileLoadedEvent.target.result; // <--- data: base64
					imgdata.value = base64; // <--- data: base64
          document.getElementById("imgdata").innerHTML = imgdata.value;
          console.log(imgdata.value)
				}

				fileReader.readAsDataURL(fileToLoad);
			}
// Base64/image END
// Resize image
function resizeBase64Img(base64, newWidth, newHeight) {
    return new Promise(function (resolve) {
        var canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        var context = canvas.getContext('2d');
        var img = document.createElement('img');
        img.src = base64;
        img.onload = function () {
            var iw = img.width;
            var ih = img.height;
            var scale = Math.min(newWidth / iw, newHeight / ih);
            var iwScaled = iw * scale;
            var ihScaled = ih * scale;
            canvas.width = iwScaled;
            canvas.height = ihScaled;
            context.drawImage(img, 0, 0, iwScaled, ihScaled);
            resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
    });
}
// Resize image END

    async function addPet() {
      await axios.post("/api/add-pets", {
        omanik: userId.value,
        loomaNimi: pet_name.value,
        liik: species.value,
        vanus: age.value,
        sugu: gender.value,
        v2limus: appearance.value,
        iseloom: character.value,
        pilt: imgdata.value,
      });
      pet_name.value = "";
      species.value = "";
      age.value = "";
      gender.value = "";
      appearance.value = "";
      character.value = "";
      imgdata.value = "";
    }

    return {
      addPet,
      resizeBase64Img,
      route,
      userId,
      pet_name,
      species,
      age,
      gender,
      appearance,
      character,
      picture,
      convert,
      imgdata,
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