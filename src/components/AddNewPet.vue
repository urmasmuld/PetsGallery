<template>
<div class="col">
        <button @click="addPet" type="submit" class="btn btn-primary w-100">
          Add new pet
        </button>
      </div>
</template>

<script>
 async function addPet() {
      await axios.post("/api/AddNewPet", {
        omanik: "",
        loomaNimi: "",
        liik: "",
        vanus: "",
        sugu: "",
        v2limus: "",
        iseloom: "",
        pilt: "",
        lisainfo: ""
      });
      
      await addPet();
    }
    return {
      addPet
    };
</script>
