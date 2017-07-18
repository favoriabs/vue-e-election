<template>
  <div class="app-president">
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div v-for="candidate in candidates">
          <div class="col s12 m4">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">XXXXXXX</span>
                <p>{{candidate.first_name +" "+ candidate.last_name}}</p>
              </div>
              <hr/>
              <div class="row">
                <h6 class="col s7 white-text"> No of Votes</h6>
                <h6 class="col s5 white-text"> {{candidate.votes}} </h6>
              </div>
              <div class="card-action">
                <a @click="vote(candidate)"><i class="material-icons">thumb_up</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
let candidatesRef = db.ref('candidates')
let presidentRef = candidatesRef.orderByChild('category').equalTo('president')

export default {
  name: 'app-president',
  data () {
    return {
      candidates: {}
    }
  },
  firebase: {
    candidates: presidentRef.limitToLast(25)
  },
  methods: {
    vote (candidate) {
      candidatesRef.child(candidate['.key'])
      .child('votes')
      .set(candidate.votes + 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
