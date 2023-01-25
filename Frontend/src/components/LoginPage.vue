<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            name="input-10-1"
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>

    
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data () {
      return {
        show1: false,
        show2: false,
        password: 'Password',
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>