<template>
    <div class="vertical-center inner-block">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

            
        </form>
    </div>
</template>

<script>
// export default {
//   name: "login",
//   props: {
//     msg: String,
//   },
// };

//  export default {
//         data() {
//             return {}
//         }
//     }
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import router from "./../router";

export default defineComponent({
  setup() {
    let email = ref("");
    let password = ref("");

    async function login() {
      const { data } = await axios.post("/api/auth/login", {
        email: email.value,
        password: password.value,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      router.push("/");
    }

    return {
      email,
      password,
      login,
    };
  },
});

</script>

<style scoped>

* {

  box-sizing: border-box;
}

/* body {
  min-height: 100vh;
  display: flex;
  font-weight: 400;
} */

/* body,
html, */
.vertical-center {
  width: 100%;
  height: 100%;
}

/* .navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
} */

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}

.inner-block {
  width: 450px;
  margin: auto;
  /* margin-top: 100px; */
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 15px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554FF;
}


</style>