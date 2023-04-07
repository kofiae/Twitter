<template>
    <div>
        <div class="flex flex-cols-2 mt-1">
            <button class="ml-3 hover:bg-pink-100  rounded-full hover:bg-pink-100 w-10 h-10">
                <i class="fa fa-arrow-left" ></i>
            </button>
            <div class="pl-5">
                <p class="text-xl font-bold">
                    bussy
                </p>
                <p>
                    17 tweets
                </p>
            </div>
        </div>
        <div>

            <img 
                 class="banner_foto"
                 src="https://picsum.photos/800/400"
                 alt="profile banner foto"
                 loading="lazy"
                 @load="onBannerImageLoad" />
        </div>


    </div>


</template>

<script >
    export default {
        name: 'Profile'
    }
</script>

<style>
    #pp {
        border-radius: 50%;
    }
</style>