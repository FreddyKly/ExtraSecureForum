<template>
  <div>
    <v-app>
      <v-app-bar color="teal-darken-4" elevate-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="app_bar text-left">Secure Forum</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-container v-for="(item, n) in items" :key="n" class="grey lighten-5 mb-6">
        <v-row :align="align" no-gutters style="height: 200px;" >
          <v-col v-for="y in 1" :key="y">
            <v-card class="mx-auto" max-width="900" outlined >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title v-text="this.test" class="text-h5 mb-1">
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text @click="$router.push('/aNewSide')">
                  View
                </v-btn>


                <v-btn outlined rounded text @click="item.expand = !item.expand">
                  Post
                </v-btn>

                <v-expand-transition>
                  <v-card v-show="item.expand" class="mx-auto secondary" max-width="900">
                    <v-textarea name="input-7-1" filled label="Your Text here" auto-grow>
                    </v-textarea>
                  </v-card>
                </v-expand-transition>


                <div class="mx-4 hidden-sm-and-down"></div>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import userService from "@/services/userService.js";

export default {

  async created(){
    try{
      this.test= await userService.getUser()
      console.log(this.test);
    }catch(error){
      console.log(error);
    }
  },

  name: "HelloWorld",
  data: () => ({
    test:"",
    alignments: [
      'start',
      'center',
      'end',
    ],
    items: [
      { text: 'I hate my life', expand: false, },
      { text: 'This is pain', expand: false, },
      { text: 'Get me out of here', expand: false, },
      { text: 'Why do I exist', expand: false, },
    ],
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

a {
  color: #42b983;
}
</style>
