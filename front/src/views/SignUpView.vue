<template>
    <div class="pl-24">
        <div class="pl-40">
            <div class="pl-40">
                <div class="pl-40 md:mb-0 flex flex-grid flex-col w-fit items-center gap-10 border border-pink-600 rounded-xl mt-7 pt-10 pb-10 pr-48 mt-32" v-auto-animate>
                    <h1 id="passenger" class=" text-5xl font-bold text-center mb-5">Creer un compte</h1>

                    <div class="flex flex-col gap-5 text-xl">
                        <input v-model="pseudo" placeholder="pseudo" class="p-2 border border-pink-600">
                        <input v-model="password" placeholder="mot de passe" type="password" class="p-2 border border-pink-600">
                        <input v-model="birthdate" placeholder="date de naissance" type="date" class="p-2 border border-pink-600">
                        <input v-model="phone" placeholder="telephone" class="p-2 border border-pink-600">
                        <input v-model="mail" placeholder="email" class="p-2 border border-pink-600">
                        <button class="text-white bg-pink-600 rounded-full text-xl px-10 h-12 mt-6 hover:bg-pink-700">
                            Creer un compte
                        </button>
                        <RouterLink to="/login">
                            <button class=" h-10 pr-8 mb-5 pl-17 ml-16 text-pink-800">
                                <p>Se connecter</p>
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