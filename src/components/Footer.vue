<template>
     <footer>
      <div class="container-fluid">
      <div class="row"> 
        <div class="col-8 col-sm-12 text-right text-dark">
            <div class="copyright">
            <p>© 2021 Copyright tak21tiim2</p>
            </div>
                  <div v-if="tokenexists">
                       <a
                class="btn btn-info m-3"
                @click="clear"
                onclick="location.href='/';"
                >Logi välja</a
              >
            </div>
            <div v-else>
              <a
                class="btn btn-info m-3"
                onclick="location.href='/Login';"
                >Logi sisse</a
              >
              <a
                class="btn btn-info m-3"
                onclick="location.href='/Register';"
                >Loo kasutaja</a
              >
            </div>
        </div>
      </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: "HelloWorld",
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
      clear,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright{
margin-top:50px;
padding-right:25px;
}


</style>
