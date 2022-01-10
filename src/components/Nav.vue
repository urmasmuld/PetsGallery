<template>
<div class="container">
      <ul class="row-flex float-right mt-2 mr-2 fixed-top">
        <div v-if="tokenexists">
              <a 
                class="btn btn-info m-3 nav-item float-right"
                @click="clear"
                onclick="location.href='/';"
                >Logi välja</a
              >
        </div>
        <div v-else>
              <li class="nav-item float-right">
              <router-link class="nav-link mt-2" to="/login">Sign in</router-link>
               </li>
              <li class="nav-item float-right mt-2">
              <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
              </li>
        </div>
        </ul>
      
</div>
<nav class="navbar navbar-expand-sm navbar-light bg-light sticky">
        <span class="navbar-text">
           <h3>Lemmikloomade galerii</h3>
        </span>
  
            
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Esileht</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/view/Madis">Madis</a>
                 </li> 
                <li class="nav-item">
                    <a class="nav-link" href="/view/Urmas">Urmas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/view/Triin">Triin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/view/Kaisa">Kaisa</a>
                </li>
                    
        </ul>
        
    </nav>
</template>

<script>
export default {
  name: "navbar",
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

<style scoped>

.sticky {
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
}

h3{
  font-weight: 700px;
  font-size: 40px;
}
.navbar {
  padding:30px;
  padding-top: 80px;
  padding-bottom:40px;
  margin-bottom:75px;
  font-size: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color:black;
   
}

.nav-item {
  
color:black;
transition: 1s;


}

.nav-item a:hover{
  transition:1s;
  transform: scale(1.1);
}

/* .navbar a.router-link-exact-active {
  color: #42b983; */

ul{
  list-style-type: none;
}

</style>



