<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/layout/Search.vue';
import Navbar from './components/layout/Navbar.vue';
import Trending from './components/layout/Trending.vue';
import Tweet from './components/Tweet.vue';


</script>

<template>
    <div class="flex container h-screen w-full flex flex-cols">

        <Navbar class="lg:w-1/4"/>
        <Tweet class="lg:w-1/2"/>
        <Trending class="lg:w-1/3"/>

        <RouterView />
    </div>

    <main>

    </main>
</template>

<style scoped>
    body {
        background-color: white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
</style>
