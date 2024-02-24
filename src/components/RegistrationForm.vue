<template>
  <form @submit.prevent="registerUser">
    <label for="username">Username:</label>
    <input v-model="username" type="text" id="username" required />

    <label for="email">Email:</label>
    <input v-model="email" type="email" id="email" required />

    <label for="password">Password:</label>
    <input v-model="password" type="password" id="password" required />

    <button type="submit">Register</button>
  </form>
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
      // Assuming you want to pass username and email to the /profile route
      const userData = {
        username: this.username,
        email: this.email
      }

      // Pass userData as query parameters
      this.$router.push({ name: 'profile', query: userData })
    }
  }
}
</script>
