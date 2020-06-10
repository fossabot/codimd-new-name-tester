<template>
  <div class="module">
    <h2>Example sentences</h2>
    <ul>
      <li>You can look it up in (the) <span class="name">{{ name }}</span></li>
      <li>I sent you a link to the Party <span class="name">{{ name }}</span></li>
      <li>We're using (the) <span class="name">{{ name }}</span> to organize and the results will be mailed to each of you</li>
      <li>make a quick note to (the) <span class="name">{{ name }}</span></li>
      <li>just choose any appointment from (the) <span class="name">{{ name }}</span></li>
      <li>add your name to (the) <span class="name">{{ name }}</span> over here [url]"</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExampleSentences',
  props: {
    name: {
      type: String,
      default: 'CodiMD'
    }
  }
}
</script>

<style scoped>
li {
  margin-bottom: 1rem;
}

.name {
  color: #75ffef;
}
</style>
