<template>
  <div class="hello">
    <h1>Siia teeme kasutajapõhise dünaamilise lehe</h1>
    <h2>Valisid kasutaja: <b>"{{ userId }}"</b></h2>
    <router-link  to="/">Mine tagasi</router-link>
    <!-- 
      Vana koodi ("Calculate.vue" põhjal) kommenteerisin lihtsalt välja, et oleks näha, kuhu saab koodi lisada ja kuidas muutujaid kasutada.
      Muutuja {{ userId }} järgi saab vastavat infot siin lehel kuvada ;)
      Alustuseks on vist lihtsam kui kuvada siia iga kasutaja kohta üks lemmikloom ;)
    -->

    <!-- <div class="row">
      <div class="mb-3 col">
        <label for="firstNumber" class="form-label">First number</label>
        <input
          v-model="firstNumber"
          type="number"
          name="firstNumber"
          class="form-control"
        />
      </div>

      <div class="mb-3 col">
        <label for="secondNumber" class="form-label">Second number</label>
        <input 
          v-model="secondNumber" 
          type="number" 
          name="secondNumber" 
          class="form-control" 
          />
      </div>

      <div class="col">
        <button
          @click="calculateNumbers(firstNumber, secondNumber)"
          type="submit"
          class="btn btn-primary w-100 submit-button"
        >
          Submit
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p>First number: {{ firstNumber }}</p>
      </div>
      <div class="col">
        <p>Second number: {{ secondNumber }}</p>
      </div>
      <div class="col">
        <p>Result is: {{ addResult }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { ref } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "View",
  props: {
    msg: String,
  },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
console.log(userId.value) // Logime kasutajanime
    // const firstNumber = ref(0);
    // const secondNumber = ref(0);
    // let addResult = ref(0);
    // function calculateNumbers(a,b) {
    //   addResult.value = a + b;
    // }
    return {
      // firstNumber,
      // secondNumber,
      // addResult,
      // calculateNumbers,
      userId,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only || Siin sai Mailise tunnis tehtud "Submit" nupule stiil, et ta oleks sisenditega samal kõrgusel
<style scoped>
.submit-button {
  margin-top: 32px;
}
</style> -->