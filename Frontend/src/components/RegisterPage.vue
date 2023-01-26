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
                <v-btn rounded @click="Login();" class="button">
                    Register
                </v-btn>
            </v-row>
            <v-alert width="30%" class="align-center mb-6" type="error" v-if="this.loginWasClicked">Login
                Unsuccessful!!</v-alert>
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
            this.loginWasClicked = true
            try {
                await userService.loginUser({ "username": this.accountname, "password": this.password })
                this.$router.replace({ name: 'home' })
            } catch (e) {
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