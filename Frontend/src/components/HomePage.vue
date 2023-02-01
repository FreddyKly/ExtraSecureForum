<template>
  <v-app>
    <v-app-bar color="#ffa31a" dense dark>
      <div class="d-flex justify-left "><v-app-bar-title class="font-weight-bold text-black ml-10"
          style="cursor: pointer" @click="$router.go()">ExtraSecureForum</v-app-bar-title></div>


      <v-spacer></v-spacer>

      <v-text-field @focus="searchClosed = false" @blur="searchClosed = true"
        :class="{ 'closed': searchClosed && !searchText }" placeholder="Suche" prepend-inner-icon="mdi-magnify" dense="true"
        class="search-bar" max-width="200px" v-model="searchText" clearable v-on:keyup.enter="search()">
      </v-text-field>


      <v-btn v-if="!this.isLoggedIn" icon stacked class="text-black">
        Register
        <v-icon @click="$router.push('/RegisterPage')">mdi-account-plus</v-icon>
      </v-btn>

      <v-btn v-if="!this.isLoggedIn" icon stacked class="text-black">
        Login
        <v-icon @click="$router.push('/LoginPage')">mdi-login</v-icon>
      </v-btn>

      <v-btn v-if="this.isLoggedIn" icon stacked class="text-black">
        Logout
        <v-icon @click="this.$axios.get('http://localhost:8080/api/users/logout'); $router.go()">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <div class="d-flex justify-center" v-if="!this.isLoggedIn">
      <v-card class="px-15 py-10 my-16">
        Bitte Log dich ein um Threads ansehen zu können
      </v-card>
    </div>


    <v-container v-for="(post, n) in listOfPosts" :key="n" class="grey lighten-5 mb-2">
      <v-row :align="align" no-gutters style="height: 100%;">
        <v-col v-for="y in 1" :key="y">
          <v-card class="mx-auto" max-width="900" outlined @click="$router.push('/Thread/' + post.id.toString())">
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
      <v-btn color="#ffa31a" fab dark small absolute bottom right><v-icon color="black">mdi-plus</v-icon></v-btn>
    </div>
  </v-app>
</template>

<script>
import threadService from "@/services/threadService.js"
import userService from "@/services/userService";
export default {

  async created() {
    try {
      this.listOfPosts = await threadService.getThreadList(this.$axios);
      console.log(this.listOfPosts);

      this.listOfPosts.forEach(element => {
        console.log(element.id);
        element.concat(this.expand);
      });
    } catch (error) {
      console.log(error);
    }
    await this.checkLoginStatus()

  },

  name: "HomePage",
  data: () => ({
    test: "",
    expand: false,
    listOfPosts: [],
    isLoggedIn: false,
    searchClosed: true,
    searchText: ""
  }),

  methods: {
    async checkLoginStatus() {
      this.isLoggedIn = await userService.isLoggedIn(this.$axios)
    },
    async search() {
      this.searchResult = await threadService.search(this.searchText, this.$axios)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  .v-input.search-bar
    height: 45px
    transition: max-width 0.3s
    cursor: pointer !important
    .v-input__control
      &:before, &:after
        border-color: transparent !important
    &.closed
      max-width: 45px
      .v-input__slot
        background: transparent !important
</style>
