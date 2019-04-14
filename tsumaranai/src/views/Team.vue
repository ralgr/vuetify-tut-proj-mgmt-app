<template lang="html">
  <div class="team">
    <h1 class="subheading font-weight-light">Team</h1>

    <v-container grid-list-xs,sm,md,lg,xl
                 class="my-5 font-weight-light">

      <v-layout row wrap>

        <v-flex xs12 sm6 md4 lg3
                v-for="(person, index) in team"
                :key="person.name + index">

          <v-card flat
                  class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                class="green darken-3">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                  {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat
                     color="grey">
                <v-icon>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>

      </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'Team',

  data() {
    return {
      team: [
       { name: 'Ralgr', role: 'Web developer', avatar: '/profiles/Free Pig.png' },
       { name: 'Ryu', role: 'Graphic designer', avatar: '/profiles/Fuse.png' },
       { name: 'Chun Li', role: 'Web developer', avatar: '/profiles/Mine!.png' },
       { name: 'Gouken', role: 'Social media maverick', avatar: '/profiles/Salt.png' },
       { name: 'Yoshi', role: 'Sales guru', avatar: '/profiles/Snowball.png' }
     ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
