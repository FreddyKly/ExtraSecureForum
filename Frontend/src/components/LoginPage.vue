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
        <v-btn class="button" rounded @click="Login()"> Login </v-btn>
      </v-row>
      <div class="align-center mb-6">
        <v-alert
          width="30%"
          type="error"
          v-if="this.loginWasClicked && !this.tooManyRequests"
          >Login Unsuccessful!!</v-alert
        >
      </div>
      <div class="align-center mb-6">
        <v-alert width="30%" type="error" v-if="this.tooManyRequests"
          >Too many Requests! Try later</v-alert
        >
      </div>
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
      loginWasClicked: false,
      tooManyRequests: false,
    };
  },

  methods: {
    async Login() {
      var responseStatus = 0;
      try {
        responseStatus = await userService.loginUser({
          username: this.accountname,
          password: this.password,
        });
        this.$router.replace({ name: "home" });
      } catch (e) {
        responseStatus = e.response.status;
        if (responseStatus == 429) {
          this.tooManyRequests = true;
        }
        this.loginWasClicked = true;
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
.button {
  color: #57b5b3;
}
</style>