<template lang="html">
  <v-dialog
    v-model="dialog"
    max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        color="amber darken-2"
        dark outline round
        v-on="on">
        Add new project
      </v-btn>
    </template>

    <v-card>
      <v-card-title primary-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="rules"></v-text-field>
          <v-textarea label="Information" v-model="info" prepend-icon="edit"></v-textarea>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field v-on="on" label="Due by" :value="due" prepend-icon="date_range"></v-text-field>
            </template>
            <v-date-picker v-model="due" :landscape="true" :reactive="true"></v-date-picker>
          </v-menu>

          <v-btn flat round class="green darken-3 mx-0 mt-3">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Popup',

  data() {
    return {
      title: '',
      info: '',
      due: null,
      rules: [
        value => value.lenght >= 3 || 'Minimum length is 3 characters'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
