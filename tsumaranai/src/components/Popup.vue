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
        <v-form class="px-3"
                ref="form">
          <v-text-field label="Title"
                        v-model="title"
                        prepend-icon="folder"
                        :rules="rules"></v-text-field>
          <v-textarea label="Information"
                      v-model="content"
                      prepend-icon="edit"
                      :rules="rules"
                      ></v-textarea>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field v-on="on"
                            label="Due by"
                            :value="computedDateFormattedDatefns"
                            readonly
                            prepend-icon="date_range"
                            ></v-text-field>
            </template>
            <v-date-picker v-model="due"
                           :landscape="true"
                           :reactive="true"></v-date-picker>
          </v-menu>

          <v-btn flat round
                 class="green darken-3 mx-0 mt-3"
                 :loading="loading"
                 @click="addProject">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/config/firebase'
import format from 'date-fns/format'

export default {
  name: 'Popup',

  data() {
    return {
      title: '',
      content: '',
      due: new Date().toISOString().substr(0, 10),
      rules: [
        value => value.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },

  methods: {
    addProject() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, 'dddd, MMMM Do YYYY'),
          person: 'Auth not available',
          status: 'ongoing'
        };

        db.collection('anti-lazy-projects').add(project)
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit('project-added')
        })
      }
    }
  },

  computed: {
    computedDateFormattedDatefns () {
     return this.due ? format(this.due, 'dddd, MMMM Do YYYY') : ''
   }
  }
}
</script>

<style lang="css" scoped>
</style>
