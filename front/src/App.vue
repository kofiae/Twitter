<script setup>
    import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <div class="flex container h-screen w-full flex flex-cols">

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
