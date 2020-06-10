<template>
  <form @submit.prevent="submitName">
    <input
      class="name"
      type="text"
      autofocus
      @keyup="changeName"
      placeholder="CodiMD"
    >
    <button
      type="submit"
    ><i class="fa fa-search"></i></button>
  </form>
</template>

<script>
export default {
  name: 'NameInput',
  methods: {
    changeName (event) {
      this.$emit('change', event.target.value)
    },
    submitName () {
      this.$emit('check')
    }
  }
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: row nowrap;
}

@mixin heightMargin {
  height: 3.5rem;
  margin: 1.5rem 0;
}

input.name {
  @include heightMargin;
  display: block;
  width: 100%;
  font-size: 2rem;
  border-radius: 8px 0 0 8px;
  border: none;
  padding: 0 0.5rem;

  &:focus {
    outline: none;
    box-shadow: #111 0 0 12px 1px;
  }
}

button {
  @include heightMargin;
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  border-radius: 0 8px 8px 0;
  font-size: 1.5rem;
  padding: 0 1.5rem;
}
</style>
