<template>
  <v-app>
    <h1>Login</h1>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            v-model="accountname"
            prepend-icon="mdi-account"
            name="login"
            label="Login"
            type="text"
            required
            v-on:keyup.enter="Login()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            prepend-icon="mdi-lock"
            name="password"
            label="Password"
            :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="password ? 'password' : 'text'"
            required
            v-on:keyup.enter="Login()"
          ></v-text-field>
        </v-col>
        <v-btn class="button" rounded @click="Login();">
          Login
        </v-btn>
      </v-row>
      <div class="align-center mb-6"><v-alert width="30%" type="error" v-if="this.loginWasClicked">Login Unsuccessful!!</v-alert></div>
      
    </v-container>
</v-app>
</template>
<script>
import userService from "@/services/userService.js";
export default {
  data() {
    return {
      accountname: "",
      password: "",
      loginWasClicked: false
    }
  },

  methods: {
    async Login() {
      try{
        await userService.loginUser({ "username": this.accountname, "password": this.password })
        this.$router.replace({name: 'home'})
      }catch(e){
        this.loginWasClicked = true
        console.log(e);
    }
  }
  }
}
</script>
<style scoped>
.button {
  color: #ffa31a;
}
</style>