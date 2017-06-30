<template>
<v-app id="example-2">
  <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
    <v-list class="pa-0">
      <v-list-item>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <!-- <v-list-tile-title>{{ item.title }}</v-list-tile-title> -->
            <router-link :to="item.path" tag="v-list-tile-title" @click.native.stop="drawer = !drawer">{{ item.title }}</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar fixed class="indigo darken-4" light>
    <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
  </v-toolbar>
  <main>
    <v-container fluid>
      <!--v-router-->
      <router-view></router-view>
    </v-container>
  </main>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [{
          title: 'Example 1',
          path: '/example1',
          icon: 'dashboard'
        },
        {
          title: 'Example 2',
          path: '/example2',
          icon: 'question_answer'
        }
      ],
      mini: false,
      title: 'Titulo del sistema'
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
