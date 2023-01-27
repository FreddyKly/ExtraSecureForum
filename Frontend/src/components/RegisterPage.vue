<template>
    <v-app>
        <h1>Register</h1>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-text-field v-model="accountname" prepend-icon="mdi-account" name="login" label="Login"
                        type="text" required></v-text-field>
                    <v-text-field v-model="password" id="password" prepend-icon="mdi-lock" name="password"
                        label="Password" :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="password ? 'password' : 'text'" required></v-text-field>
                    <v-text-field v-model="confirmPassword" prepend-icon="mdi-lock" name="confirmPassword" label="Confirm Password"
                        type="password" placeholder="cocnfirm password" required></v-text-field>
                </v-col>
                <v-btn rounded @click="Register();" class="button">
                    Register
                </v-btn>
            </v-row>
            <div class="d-inline-flex justify-center" width="30%"><v-alert type="error" v-if="this.loginWasClicked">Login
                Unsuccessful!!</v-alert>
            <v-alert v-if="!this.passwordsEqual && this.registerWasClicked" type="error">Passwords don't match</v-alert></div>
            
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
            confirmPassword: "",
            registerWasClicked: false,
            passwordsEqual: false          
        }
    },

    methods: {
        async Register() {
            this.registerWasClicked = true
            if (this.password == this.confirmPassword && this.password != "") {
                this.passwordsEqual = true
               try {
                    await userService.registerUser({ "username": this.accountname, "password": this.password })
                    this.$router.replace({ name: 'home' })
                } catch (e) {
                    console.log(e);
                } 
            } else {
                this.passwordsEqual = false
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