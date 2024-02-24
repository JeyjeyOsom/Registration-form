<template>
  <div class="container">
    <div class="data-container">
      <h2>Welcome, {{ $route.query.username }}!</h2>
      <p>Email: {{ $route.query.email }}</p>
      <p>Password: ********</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return 'username'
    },
    email() {
      return 'user@example.com'
    }
  }
}
</script>
<style>
div.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
div.data-container {
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
</style>
