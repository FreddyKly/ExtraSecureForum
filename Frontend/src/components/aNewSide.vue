<template>
  <v-app>
  <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">ExtraSecureForum</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>


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

  <v-card class="mt-5 mx-auto" max-width="900" color="#fcfaff"> 
    <v-card color="#f0e6ff">
    <v-list-item three-line>
      
      <v-list-item-content>
        <div v-text="this.thread.title" class="text-h4 mb-4">

        </div>
        <v-list-item-title class="text-h5 mb-1">
        </v-list-item-title>
        <v-list-item-subtitle v-text="this.thread.post"></v-list-item-subtitle>
      </v-list-item-content>
    

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>

    <v-card-actions>
      <v-btn variant="elevated" elevation="3" @click="this.thread.expand = !this.thread.expand">
        Answere
      </v-btn>

      <v-expand-transition>
        <v-card v-show="this.thread.expand" class="mx-auto secondary" max-width="900">
          <v-textarea v-model="newPost" filled label="Your Text here" auto-grow>
          </v-textarea>
          <v-card-actions>
            <v-btn rounded @click="savePost(); this.$router.go()">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>

      <div class="mx-4 hidden-sm-and-down"></div>
    </v-card-actions>
    <v-container v-for="(post, n) in listofAnwsers" :key="n" class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 100%;">
        <v-col v-for="y in 1" :key="y">
          <v-card class="mx-auto" max-width="900" elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle v-html="post.post"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</v-app>
</template>

<script>
import postService from "@/services/postService";
import threadService from "@/services/threadService.js"
export default {
  async created() {
    this.threadId = window.location.pathname.split('/')[2];
    try {

      this.listOfPosts = await threadService.getThread(this.threadId);
      this.listOfPosts.concat(this.expand);

      this.thread = this.listOfPosts[0],
        console.log(this.thread);


    } catch (error) {
      console.log(error);
    }

    try {
      this.listofAnwsers= await postService.getAnwsers(this.threadId);
      console.log(this.listofAnwsers);

    } catch (error) {
      console.log(error);
    }
  },


  data: () => ({
    listofAnwsers:[],
    threadId: "",
    contentToPost: "",
    expand: false,
    listOfPosts: [],
    thread: [],
  }),

  mounted() {
    this.contentToPost = this.newPost;
  },
  methods: {
    savePost() {
      console.log(this.newPost);
      postService.postAwnser({ "thread_id": this.threadId, "post": this.newPost })


    }
  }
}
</script>
