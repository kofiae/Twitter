<script setup>
    import Navbar from '../components/layout/Navbar.vue';
    import Trending from '../components/layout/Trending.vue';
    import Notif from '../components/layout/Notif.vue';

</script>

<template>
    <Navbar />
    <Notif class="lg:w-1/2" />
    <Trending class="lg:w-1/3" />
</template>

<style scoped>
</style>