<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div v-text="this.thread.title" class="text-overline mb-4">

        </div>
        <v-list-item-title class="text-h5 mb-1">
        </v-list-item-title>
        <v-list-item-subtitle v-text="this.thread.post"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text @click="this.thread.expand = !this.thread.expand">
        Post
      </v-btn>

      <v-expand-transition>
        <v-card v-show="this.thread.expand" class="mx-auto secondary" max-width="900">
          <v-textarea v-model="newPost" filled label="Your Text here" auto-grow>
          </v-textarea>
          <v-card-actions>
            <v-btn outlined rounded text @click="savePost">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>

      <div class="mx-4 hidden-sm-and-down"></div>
    </v-card-actions>

    

  </v-card>
</template>

<script>
import postService from "@/services/postService";
import threadService from "@/services/threadService.js"
export default {
  async created() {
    try {
      this.threadId = window.location.pathname.split('/')[2];

      this.listOfPosts = await threadService.getThread(this.threadId);
      this.listOfPosts.concat(this.expand);

      this.thread = this.listOfPosts[0],
        console.log(this.thread);


    } catch (error) {
      console.log(error);
    }
  },


  data: () => ({
    threadId:"",
    contentToPost:"",
    expand: false,
    listOfPosts: [],
    thread: [],
  }),

  mounted(){
    this.contentToPost = this.newPost;
  },
  methods:{
    savePost(){
      console.log(this.newPost);
      postService.postAwnser({"thread_id":this.threadId, "post":this.newPost})


    }
  }
}
</script>
