<template>
    <div class="pl-24">

        <div class="pl-48">
            <div class="pl-48">
                <div class="pl-48 md:mb-0 flex flex-grid flex-col w-fit items-center gap-10 border border-pink-600 rounded-xl mt-10 pt-10 pb-10 pr-48 mt-32" v-auto-animate>
                    <h1 id="passenger" class=" text-5xl font-bold text-center mb-5">Se connecter</h1>

                    <div class="flex flex-col gap-5 text-xl">
                        <input v-model="pseudo" placeholder="pseudo" class="p-2 border border-pink-600 mb-5">
                        <input v-model="password" placeholder="mot de passe" type="password" class="p-2 border border-pink-600">
                        <button class="text-white bg-pink-600 rounded-full text-xl px-10 h-12 mt-6 hover:bg-pink-700">
                            Se connecter
                        </button>
                        <RouterLink to="/signup">
                            <button class=" h-10 pr-8 mb-5 pl-10 text-pink-800">
                                <p>Creer un compte</p>
                            </button> 
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style lang="scss">
  
</style>