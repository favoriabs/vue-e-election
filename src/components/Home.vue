<template>
  <div class="hello">
    <app-header></app-header>
    <div class="container">
      <table class="bordered">
          <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Votes</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="candidate in candidates">
              <td>{{candidate.last_name +" " + candidate.first_name}}</td>
              <td><b>{{candidate.category.toUpperCase()}}</b></td>
              <td>{{candidate.votes}}</td>
            </tr>
          </tbody>
        </table>
     </div>
  </div>
</template>

<script>
import {db} from '../firebase'
let candidatesRef = db.ref('candidates').orderByChild('votes')

export default {
  name: 'home',
  data () {
    return {
      candidates: {}
    }
  },
  firebase: {
    candidates: candidatesRef.limitToLast(10)
  },
  computed: {
    orderCandidates () {
      return this.candidates.reverse()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
