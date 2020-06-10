<template>
  <main>
    <Heading />
    <NameInput @change="updateName" @check="checkName" />
    <ExampleSentences :name="name" />
    <GitHubCheck ref="githubCheck" />
    <DomainCheck ref="domainCheck" />
  </main>
</template>

<script>
import Heading from './components/Heading'
import NameInput from './components/NameInput'
import ExampleSentences from './components/ExampleSentences'
import GitHubCheck from './components/GitHubCheck'
import DomainCheck from './components/DomainCheck'
export default {
  name: 'App',
  components: {
    DomainCheck,
    GitHubCheck,
    ExampleSentences,
    NameInput,
    Heading
  },
  data () {
    return {
      name: 'CodiMD'
    }
  },
  methods: {
    updateName (name) {
      if (name === '') {
        this.name = 'CodiMD'
        return
      }
      this.name = name
    },
    checkName () {
      this.$refs.githubCheck.runChecks(this.name)
      this.$refs.domainCheck.runChecks(this.name)
    }
  }
}
</script>

<style lang="scss">
@import "~fork-awesome/css/fork-awesome.min.css";

body, html {
  background-color: #333333;
  color: #ffffff;
  margin: 0;
  border: 0;
  font-family: Tahoma, Geneva, sans-serif;
}

* {
  box-sizing: border-box;
}

main {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  display: block;
  max-width: 850px;
  width: 95%;
}

.module {
  background-color: #444444;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  margin: 2rem 0 2rem 0;

  h2 {
    color: #a5a5a5;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0 1rem 0;
  }
}
</style>
