<template>
  <v-app>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            prepend-icon="mdi-account"
            name="login"
            label="Login"
            type="text"
          ></v-text-field>
          <v-text-field
            id="password"
            prepend-icon="mdi-lock"
            name="password"
            label="Password"
            :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (password = !password)"
            :type="password ? 'password' : 'text'"
          ></v-text-field>
        </v-col>
        <v-btn rounded @click="Login();">
          Login
        </v-btn>

      </v-row>
    </v-container>
  </v-form>
</v-app>
</template>
<script>
import userService from "@/services/userService.js";
export default {
  data() {
    return {
      accountname: "",
      password: 'Password',
      rules: {
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },

  mounted() {
    this.accountname = this.loginAccountname;
    this.password = this.loginPassword
  },
  methods: {
    async Login() {
      try{
      await userService.loginUser({ "username": this.accountname, "password": this.password })
    }catch(e){
     console.log(e); 
    }
  }
  }
}
</script>