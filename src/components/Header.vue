<template>
    <nav>
    <div class="nav-wrapper  blue-grey darken-3">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/#/index">LeaderBoard</a></li>
        <li><a href="/#/candidate/president">Presidency</a></li>
        <li><a href="/#/candidate/senate">Senate President</a></li>
        <li><a href="/#/new-candidate">Add Candidates</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
