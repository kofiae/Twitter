<template>
    <div class="w-1/3 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between items-center">
        <div>
            <button class="h-12 w-12 hover:bg-pink-100 text-3xl rounded-full text-pink-600 ml-5">
                <RouterLink to="/home"><i class="fab fa-twitter" /></RouterLink>
            </button>
            <div id="menu" class="flex pt-5 ml-2 ">
                <div class="text-2xl">
                    <RouterLink to="/">
                        <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                            <i class="fa fa-home pl-5 pr-5" />
                            <p>Accueil</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/explore">
                        <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                            <i class="fa fa-hashtag pl-5 pr-5" />
                            <p>Explorer</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/notifications">
                        <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                            <i class="far fa-bell pl-5 pr-5" />
                            <p>Notifications</p>
                        </button>
                    </RouterLink>
                    <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                        <i class="far fa-envelope pl-5 pr-5" />
                        <p>Messages</p>
                    </button>

                    <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                        <i class="far fa-bookmark pl-5 pr-5" />
                        <p>Signets</p>
                    </button>
                    <RouterLink to="/account">
                        <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">

                            <i class="far fa-user pl-5 pr-5" />
                            <p>Profil</p>

                        </button>
                    </RouterLink>
                    <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                        <i class="fa fa-ellipsis-h pl-5 pr-5" />
                        <p>Plus</p>
                    </button>

                    <button class="text-white bg-pink-600 rounded-full text-xl px-10 h-12 mt-6 hover:bg-pink-700">
                        Tweeter 
                    </button>
                </div>
            </div>

        </div>


        <div class="w-64 ml-2  relative">
            <button @click="dropdown = true" class="flex items-center w-full hover:bg-pink-100 rounded-full p-2 focus:outline-none">
                <img src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png" class="w-10 h-10 rounded-full border border-pink-600" />
                <div class="hidden lg:block ml-4">
                    <p class="text-sm font-bold leading-tight"> Bussy </p>
                    <p class="text-sm leading-tight"> @bussy </p>
                </div>
                <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
            </button>
            <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
                <button @click="dropdown = false" class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
                    <img src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png" class="w-10 h-10 rounded-full border border-lighter" />
                    <div class="ml-4">
                        <p class="text-sm font-bold leading-tight"> Bussy </p>
                        <p class="text-sm leading-tight"> @bussy </p>
                    </div>
                    <i class="fas fa-check ml-auto test-blue"></i>
                </button>
                <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
                    Add an existing account
                </button>
                <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
                    Log out @bussy
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { twitterStore } from "../../stores/twitter.js"


</script>

<style scoped>

</style>