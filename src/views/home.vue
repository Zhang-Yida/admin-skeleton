<template>
  <router-view />
</template>
<script>
export default {
  name: 'Home',
  created () {
    console.log('Home Created')
  },
  mounted () {
    console.log('Home Mounted')
  }
}
</script>
