<template lang="html">
  <div class="projects">
    <h1 class="subheading">Projects</h1>

    <v-container grid-list-xs,sm,md,lg,xl
                 class="my-5 font-weight-light">

      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects">
          <template v-slot:header>
            <div>{{ project.title }}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text text--darken-1">
              <div class="font-weight-bold">
                Due by {{ project.due }}
              </div>
              <div>
                {{ project.content }}
              </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </div>
</template>

<script>
import db from '@/config/firebase'

export default {
  name: 'Projects',

  data() {
    return {
      projects: []
    }
  },

  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Auth not available'
      })
    }
  },

  created() {
    db.collection('anti-lazy-projects').onSnapshot(result => {
      // Check for changes.
      const changes = result.docChanges();

      changes.forEach(change => {
        if (change.type == 'added') {
          this.projects.push({
            // ... spreads the data properties inside this object.
            ...change.doc.data()
          })
        }
      })
    })
  }
}
</script>

<style lang="css" scoped>
</style>
