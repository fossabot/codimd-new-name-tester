<template>
  <div class="module">
    <h2><i class="fa fa-globe"></i> Domain availability check</h2>
    <span class="info">Results may be cached for up to an hour.</span>
    <p v-if="status === 0">Press ENTER in the inputbox to run this check.</p>
    <p v-if="status === 1"><i class="fa fa-pulse fa-spinner"></i> Checking .org, .net, .com, .io, .de domain ...</p>
    <div v-if="status === 2">
      <p v-for="domain in availability" :key="domain.domain">
        <b v-if="domain.available" class="success"><i class="fa fa-check-circle"></i> The domain <span class="domain">{{ domain.domain }}</span> is available.</b>
        <b v-if="!domain.available" class="failure"><i class="fa fa-times-circle"></i> The domain <a :href="'http://' + domain.domain" class="domain" target="_blank">{{ domain.domain }}</a> is not available.</b>
      </p>
    </div>
  </div>
</template>

<script>
import { fetch } from '../fetchTimeout'

export default {
  name: 'DomainCheck',
  data () {
    return {
      status: 0,
      availability: []
    }
  },
  methods: {
    async runChecks (name) {
      this.status = 1
      this.availability = []
      const urlName = encodeURIComponent(name)
      const domains = await Promise.all([
        fetch('https://domain-available.liltv.media/' + urlName + '.net').then(resp => resp.json()),
        fetch('https://domain-available.liltv.media/' + urlName + '.org').then(resp => resp.json()),
        fetch('https://domain-available.liltv.media/' + urlName + '.com').then(resp => resp.json()),
        fetch('https://domain-available.liltv.media/' + urlName + '.de').then(resp => resp.json()),
        fetch('https://domain-available.liltv.media/' + urlName + '.io').then(resp => resp.json())
      ]).catch(err => console.error(err))
      for (const domain of domains) {
        if (Object.prototype.hasOwnProperty.call(domain, 'success') && domain.success) {
          this.availability.push(domain)
        }
      }
      this.status = 2
    }
  }
}
</script>

<style scoped>
.domain {
  color: #75ffef;
}
.info {
  color: #a5a5a5;
}
</style>
