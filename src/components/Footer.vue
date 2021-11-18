<template>
     <footer>
      <div class="container-fluid">
      <div class="row"> 
        <div class="col-12 col-sm-12 text-right text-dark">
            <div class="copyright">
            <p>© 2021 Copyright tak21tiim2</p>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright{
margin-top:50px;
padding-right:25px;
}


</style>
