<template>
  <div>
    <h2>Welcome, {{ $route.query.username }}!</h2>
    <p>Email: {{ $route.query.email }}</p>
    <p>Password: ********</p>
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
