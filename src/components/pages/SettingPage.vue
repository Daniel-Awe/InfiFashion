<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'SettingPage',
  methods: {
    logout() {
      this.$store.dispatch('doLogout').then(() => this.$router.push('/'))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $--background-color-base;
}
</style>
