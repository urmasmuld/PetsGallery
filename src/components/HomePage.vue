<template>
  <div class="homepage">
    <!-- <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Madis' }}">madis</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Urmas' }}">urmas</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Kaisa' }}">kaisa</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Triin' }}">triin</router-link>
    </div>
  </div> -->

    <div class="jumbotron jumbotron-fluid sticky">
          <div class="container-fluid">
            <h1 class="display-4 ml-5">Lemmikloomade galerii</h1>
          </div>
      </div>

    <div class="container-fluid p-5 mb-3">
          <div class="row">

            <div class="col-3 col-sm-3">
              <router-link :to="{ name: 'detail', params: { userId: 'Madis' }}">
                <div class="card text-white">
                <img src="../assets/front_1.jpg" class="img-fluid" />
                <div class="card-img-overlay d-flex align-items-end">
                    <h3 class="card-title">Madis</h3>
                </div>
                </div>
              </router-link>
            </div>
          

            <div class="col-3 col-sm-3"> 
                <router-link :to="{ name: 'detail', params: { userId: 'Urmas' }}">
                  <div class="card text-white">
                  <img src="../assets/front_2.jpg" class="img-fluid" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <h3 class="card-title">Urmas</h3>
                  </div>
                  </div>
              </router-link>
            </div>
            

            <div class="col-3 col-sm-3">
              <router-link :to="{ name: 'detail', params: { userId: 'Kaisa' }}">
                <div class="card text-white">
                <img src="../assets/front_3.jpg" class="img-fluid" />
                <div class="card-img-overlay d-flex align-items-end">
                  <h3 class="card-title">Kaisa</h3>
                </div>
                </div>
                </router-link>
            </div>

            <div class="col-3 col-sm-3">
                <router-link :to="{ name: 'detail', params: { userId: 'Triin' }}">
                  <div class="card text-white">
                  <img src="../assets/front_4.jpg" class="img-fluid" />
                  <div class="card-img-overlay d-flex align-items-end">
                    <h3 class="card-title">Triin</h3>
                  </div>
                  </div>
                </router-link>
            </div>

          </div>
        </div>
      </div>
</template>
<style scoped>
.sticky {
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
}
</style>
<script>
  export default {
  name: "HomePage",
  props: {
    msg: String,  },
  };    

</script>

