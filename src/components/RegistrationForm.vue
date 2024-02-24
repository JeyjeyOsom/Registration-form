<template>
  <div class="container">
    <form @submit.prevent="registerUser">
      <div class="form-container">
        <div class="form-fields">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div class="form-fields">
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-fields">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required />
        </div>

        <button class="style" type="submit">Register</button>
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
  width: 400px;
  background-color: #fdf7e4;
  border: 1px solid #383633;
  border-radius: 4px;
  color: #113946;
  font-weight: 600;
  font-size: larger;
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
}
div.form-fields {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
button.style {
  background-color: #faf6f0;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
}
label {
  justify-content: flex-start;
  display: flex;
}

input {
  height: 24px;
}
</style>
