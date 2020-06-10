<template>
  <input
    class="name"
    type="text"
    autofocus
    @keyup="changeName"
    placeholder="CodiMD"
  >
</template>

<script>
export default {
  name: 'NameInput',
  methods: {
    changeName (event) {
      this.$emit('change', event.target.value)
      if (event.code === 'Enter') {
        this.$emit('check')
      }
    }
  }
}
</script>

<style scoped>
input.name {
  display: block;
  width: 100%;
  height: 3.5rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
  margin: 1.5rem 0;
  padding: 0 0.5rem;
}
</style>
