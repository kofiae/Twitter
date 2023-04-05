<script setup>
    import Search from '../components/layout/Search.vue';
    import Navbar from '../components/layout/Navbar.vue';
    import Trending from '../components/layout/Trending.vue';
    import Tweet from '../components/Tweet.vue';
</script>

<template>
    <Navbar />
    <Tweet class="lg:w-1/2" />
    <Trending class="lg:w-1/3" />
</template>

<style scoped>

</style>