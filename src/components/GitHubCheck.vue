<template>
  <div class="module">
    <h2><i class="fa fa-github"></i> GitHub name check</h2>
    <p v-if="status === 0">Press ENTER in the inputbox to run this check.</p>
    <p v-if="status === 1"><i class="fa fa-pulse fa-spinner"></i> Checking for existing GitHub username or organization ...</p>
    <p v-if="status === 2"><span class="success"><i class="fa fa-check-circle"></i> <b>No conflicting GitHub username or organisation found!</b></span></p>
    <div v-if="status === 3">
      <p class="failure"><i class="fa fa-times-circle"></i> <b>A conflicting GitHub username or organisation was found.</b></p>
      <GitHubCard v-for="profile in conflicts" :key="profile.id" :data="profile" />
    </div>
  </div>
</template>

<script>
import { fetch } from '../fetchTimeout'
import GitHubCard from './GitHubCard'

export default {
  name: 'GitHubCheck',
  components: { GitHubCard },
  data () {
    return {
      status: 0,
      conflicts: []
    }
  },
  methods: {
    async runChecks (name) {
      this.status = 1
      this.conflicts = []
      const urlName = encodeURIComponent(name)
      const [respUser, respOrg] = await Promise.all([
        fetch('https://api.github.com/user/' + urlName).then(resp => resp.json()),
        fetch('https://api.github.com/orgs/' + urlName).then(resp => resp.json())
      ]).catch(err => console.error(err))

      const orgExistent = Object.prototype.hasOwnProperty.call(respOrg, 'id')
      const userExistent = Object.prototype.hasOwnProperty.call(respUser, 'id')
      if (!orgExistent && !userExistent) {
        this.status = 2
      } else {
        this.status = 3
        if (orgExistent) {
          this.conflicts.push(respOrg)
        }
        if (userExistent) {
          this.conflicts.push(respUser)
        }
      }
    }
  }
}
</script>

<style scoped>
.success {
  color: #34d834;
}
.failure {
  color: #ffde26;
}
</style>
