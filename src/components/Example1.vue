<template>
<div>
  <h2 class="display-1">{{title}}</h2>
  <v-tabs id="mobile-tabs-4" grow icons light>
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="(tab, index) in tabs" :key="index" :href="'#mobile-tabs-4-' + (index + 1)">
        {{tab.title}}
        <v-icon>{{tab.icon}}</v-icon>
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content v-for="(tab, index) in tabs" :key="index" :id="'mobile-tabs-4-' + (index + 1)">
      <v-card flat>

        <v-card-title>
          {{tab.title}}
          <v-spacer></v-spacer>
          <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
        </v-card-title>
        <v-data-table v-bind:headers="headers" v-bind:items="tab.items" v-bind:search="tab.search">
          <template slot="items" scope="props">
        <td>
          <v-edit-dialog
            @open="props.item._name = props.item.name"
            @cancel="props.item.name = props.item._name || props.item.name"
            lazy
          > {{ props.item.name }}
            <v-text-field
              slot="input"
              label="Edit"
              v-bind:value="props.item.name"
              v-on:change="val => props.item.name = val"
              single-line counter="counter"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.sodium }}</td>
        <td class="text-xs-right">{{ props.item.calcium }}</td>
        <td>
          <v-edit-dialog
            class="text-xs-right"
            @open="props.item._iron = props.item.iron"
            @cancel="props.item.iron = props.item._iron || props.item.iron"
            large
            lazy
          >
            <div class="text-xs-right">{{ props.item.iron }}</div>
            <div slot="input" class="mt-3 title">Update Iron</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-bind:value="props.item.iron"
              v-on:blur="val => props.item.iron = val"
              single-line
              counter
              autofocus
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
          <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
        </v-data-table>

      </v-card>
    </v-tabs-content>
  </v-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Titulo ejemplo 1',
      tabs: [{
        title: 'Seccion 1',
        icon: 'phone',
        search: '',
        items: [{name: 'holi'}]
      }, {
        title: 'Seccion 2',
        icon: 'favorite',
        search: '',
        items: []
      }, {
        title: 'Seccion 3',
        icon: 'account_box',
        search: '',
        items: []
      }]
    }
  }
}
</script>
