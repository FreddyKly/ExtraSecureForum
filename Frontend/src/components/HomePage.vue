<template>
    <v-app>
      <v-app-bar color="#ffa31a" dense dark>
      <v-app-bar-title class="font-weight-bold text-black" style="cursor: pointer" @click="$router.go()">ExtraSecureForum</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon stacked class="text-black">
        Register
        <v-icon @click="$router.push('/RegisterPage')">mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon stacked class="text-black">
        Login
        <v-icon @click="$router.push('/LoginPage')" >mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

      <v-container v-for="(post, n) in listOfPosts" :key="n" class="grey lighten-5 mb-2">
        <v-row :align="align" no-gutters style="height: 100%;">
          <v-col v-for="y in 1" :key="y">
            <v-card class="mx-auto" max-width="900" outlined @click="$router.push('/Thread/'+ post.id.toString())">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title v-text="post.title" class="text-h5 ma-5">
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="post.post"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>   
      </v-container>
      <div>
        <v-btn
                  color="#ffa31a"
                  fab
                  dark
                  small
                  absolute
                  bottom
                  right
                ><v-icon color="black">mdi-plus</v-icon></v-btn>
      </div>
    </v-app>
</template>

<script>
import threadService from "@/services/threadService.js"
export default {

  async created(){
    try{
      this.listOfPosts= await threadService.getThreadList(this.$axios);
      console.log(this.listOfPosts);

      this.listOfPosts.forEach(element => {
        console.log(element.id);
       element.concat(this.expand);
      });
    }catch(error){
      console.log(error);
    }

  },

  name: "HomePage",
  data: () => ({
    test:"",
    expand: false,
    listOfPosts: []
  }),
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
