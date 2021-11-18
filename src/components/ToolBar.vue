<template lang="">
     <div class="header">
        <router-link to="/news">News</router-link> |
        <router-link :to="{ name: 'ask' }">Ask</router-link> |
        <router-link :to="{ name: 'jobs'}">Jobs</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      .header {
        display: flex;
        padding: 8px;
        background: #42b883;
        color: #fff;
    }

    .header a {
        color: #fff;
    }

    .header .router-link-exact-active {
        color: #35495e;
    }
</style>