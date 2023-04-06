<script setup>


</script>

<template>
    <div class="w-full md:w-1/2 h-full ">
        <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
        </div>
        <div class="px-5 py-3 border-b border-lighter flex">
            <div class="flex-none">
                <img src="profile.png" class="flex-none w-12 h-12 rounded-full border border-pink-600" />
            </div>
            <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
                <textarea placeholder="Quoi de neuf ?" class="mt-3 pb-3 w-full focus:outline-none" />
                <div class="flex items-center">
                    <i class="text-lg text-blue mr-4 far fa-image hover:bg-pink-100 rounded-full h-7 w-7"></i>
                    <i class="text-lg text-blue mr-4 fas fa-film hover:bg-pink-100 rounded-full h-7 w-7"></i>
                    <i class="text-lg text-blue mr-4 far fa-chart-bar hover:bg-pink-100 rounded-full h-7 w-7"></i>
                    <i class="text-lg text-blue mr-4 far fa-smile hover:bg-pink-100 rounded-full h-7 w-7"></i>
                </div>
                <button class="text-white bg-pink-600 font-semibold rounded-full h-10 px-4  h-12 mt-6 hover:bg-pink-700 focus:outline-none absolute bottom-0 right-0">
                    Tweeter
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>