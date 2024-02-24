<template>
  <div class="container">
    <form @submit.prevent="registerUser">
      <div class="form-container">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />

        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />

        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />

        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      const userData = {
        username: this.username,
        email: this.email
      }

      this.$router.push({ name: 'profile', query: userData })
    }
  }
}
</script>

<style>
div.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
div.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
}
</style>
