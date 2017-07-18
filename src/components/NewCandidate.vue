<template>
  <div class="add-candidate">
    <app-header></app-header>
    <br/>

    <div class="container">
      <h4 class="left-align">Add A New Candidate</h4>
      <form @submit.prevent="saveCandidate()">
        <div class="col m8">
          <div class="row">
            <div class="input-field col m6">
              <input type="text" v-model="candidate.first_name" />
              <label>First Name</label>
            </div>
            <div class="input-field col m6">
              <input type="text" v-model="candidate.last_name" />
              <label>Last Name</label>
            </div>
          </div>
          <div class="row">
            <div>
              <select class="browser-default" v-model="candidate.category">
                <option value="" disabled>Choose a Category</option>
                <option value="president">Presidency</option>
                <option value="senate">Senate President</option>
              </select>
            </div>
          </div>
          <div class="right">
            <button class="btn waves-effect waves-light blue-grey lighten-1" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
      </div>
      </form>
   </div>
  </div>
</template>

<script>
import {db} from '../firebase'
let candidatesRef = db.ref('candidates')

export default {
  name: 'add-candidate',
  firebase: {
    candidates: candidatesRef
  },
  data () {
    return {
      candidate: {
        first_name: '',
        last_name: '',
        category: '',
        votes: 0
      }
    }
  },
  methods: {
    saveCandidate () {
      candidatesRef.push(this.candidate)
      this.candidate.first_name = ''
      this.candidate.last_name = ''
      this.candidate.category = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
