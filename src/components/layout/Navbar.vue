<script setup>

</script>

<template>
    <div class=" border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <button class="h-12 w-12 hover:bg-pink-100 text-3xl rounded-full text-pink-600 pl-7">
            <i class="fab fa-twitter" />
        </button>

        <div id="menu" class="flex pt-5 ml-2 ">
            <div class="text-2xl">
                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="fa fa-home pl-5 pr-5" />
                    <p>Accueil</p>
                </button>

                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="fa fa-hashtag pl-5 pr-5" />
                    <p>Explorer</p>
                </button>

                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="far fa-bell pl-5 pr-5" />
                    <p>Notifications</p>
                </button>

                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="far fa-envelope pl-5 pr-5" />
                    <p>Messages</p>
                </button>

                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="far fa-bookmark pl-5 pr-5 bg-lightblue" />
                    <p>Signets</p>
                </button>

                <button class="flex items-center rounded-full hover:bg-pink-100 h-10 pr-8 mb-5">
                    <i class="far fa-user pl-5 pr-5" />
                    <p>Profil</p>
                </button>

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
</template>

<style scoped>

</style>