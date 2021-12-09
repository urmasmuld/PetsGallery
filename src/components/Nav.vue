<template>

<nav class="navbar navbar-expand-sm navbar-light bg-light sticky" >
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
  font-weight: bold;
  font-size: 40px;
}
.navbar {
  padding:30px;
  padding-top: 10px;
  padding-bottom:10px;
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


</style>



