<template>
  <div class="dashboard">
    <h1 class="subheading">Dashboard</h1>

    <v-container grid-list-xs,sm,md,lg,xl
                 class="my-5 font-weight-light">

      <v-layout row class="mb-3">

        <v-tooltip top>
          <v-btn small flat color="grey"
                 @click="sortBy('title')"
                 slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span class="font-weight-light">Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color="grey"
                 @click="sortBy('person')"
                 slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">by author</span>
          </v-btn>
          <span class="font-weight-light">Sort by author</span>
        </v-tooltip>

      </v-layout>

      <v-card flat
              class="ma-2"
              v-for="(project, index) in projects"
              :key="project.title + index">
        <v-layout row wrap
                  :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">
              Project title
            </div>

            <div>
              {{ project.title}}
            </div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Author
            </div>
            <div>
              {{ project.person }}
            </div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Due by
            </div>
            <div>
              {{ project.due }}
            </div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip :class="`${project.status} caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>

        </v-layout>
      </v-card>

    </v-container>
  </div>
</template>

<script>
  import db from '@/config/firebase'

  export default {
    name: 'Dashboard',

    data() {
      return {
        projects: []
      }
    },

    methods: {
      sortBy(prop) {
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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

<style>
  .project.complete{
    border-left: 4px solid #3CD1C2;
  }

  .project.ongoing{
    border-left: 4px solid orange
  }

  .project.overdue{
    border-left: 4px solid tomato;
  }

  .v-chip.complete{
    background: #2196F3;
  }

  .v-chip.ongoing{
    background: #ffaa2c;
  }

  .v-chip.overdue{
    background: #f83e70;
  }
</style>
