<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field v-model="loginAccountname" name="input-10-1" @click:append="show1 = !show1"></v-text-field>

          <v-text-field v-model="loginPassword" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" counter
            @click:append="show2 = !show2"></v-text-field>
        </v-col>
        <v-btn outlined rounded text @click="Login();">
          Login
        </v-btn>

      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import userService from "@/services/userService.js";
export default {
  data() {
    return {
      show1: false,
      accountname: "",
      show2: false,
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