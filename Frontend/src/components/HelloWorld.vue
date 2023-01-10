<template>
  <div>
    <v-app>
      <v-app-bar color="teal-darken-4" elevate-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="app_bar text-left">Secure Forum</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-container v-for="n in 8" :key="n" class="grey lighten-5 mb-6">
        <v-row :align="align" no-gutters style="height: 150px;">
          <v-col v-for="n in 1" :key="n">
            <v-card class="mx-auto" max-width="900" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    NOTHING
                  </v-list-item-title>
                  <v-list-item-subtitle>your text here</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text @click="$router.push('/aNewSide')">
                  View
                </v-btn>


                <v-btn outlined rounded text @click="expand = !expand">
                  Post
                </v-btn>

                <v-expand-transition>
                  <v-card  v-show="expand" class="mx-auto secondary" max-width="900">
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
export default {
  name: "HelloWorld",
  data: () => ({
    test: 'hello',
    alignments: [
      'start',
      'center',
      'end',
    ],
    expand: false,
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
