<template>
    <v-app>
      <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-app-bar-title style="cursor: pointer" @click="$router.go()">ExtraSecureForum</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon stacked>
        Register
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon stacked>
        Login
        <v-icon @click="$router.push('/LoginPage')" >mdi-login</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template> -->

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


      <v-container v-for="(post, n) in listOfPosts" :key="n" class="grey lighten-5 mb-6">
        <v-row :align="align" no-gutters style="height: 100%;">
          <v-col v-for="y in 1" :key="y">
            <v-card class="mx-auto" max-width="900" outlined @click="$router.push('/aNewSide/'+ post.id.toString())">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title v-text="post.title" class="text-h5 mb-1">
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="post.post"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <!-- <v-card-actions>
                <v-btn outlined rounded text @click="$router.push('/aNewSide/'+ post.id.toString())">
                  View
                </v-btn>


                <v-btn outlined rounded text @click="post.expand = !post.expand">
                  Post
                </v-btn>

                <v-expand-transition>
                  <v-card v-show="post.expand" class="mx-auto secondary" max-width="900">
                    <v-textarea name="input-7-1" filled label="Your Text here" auto-grow>
                    </v-textarea>
                  </v-card>
                </v-expand-transition>

                <div class="mx-4 hidden-sm-and-down"></div>

              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<script>
import userService from "@/services/userService.js";
import threadService from "@/services/threadService.js"

export default {

  async created(){
    try{
      this.test= await userService.getUser()
      console.log(this.test);
    }catch(error){
      console.log(error);
    }

    try{
      this.listOfPosts= await threadService.getThreadList();
      console.log(this.listOfPosts);

      this.listOfPosts.forEach(element => {
        console.log(element.id);
       element.concat(this.expand);
      });
    }catch(error){
      console.log(error);
    }

  },

  name: "HelloWorld",
  data: () => ({
    test:"",
    expand: false,
    listOfPosts: [],
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

</style>
