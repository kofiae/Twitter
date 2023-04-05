<template>
    <div>
        <div class="flex flex-col items-center flex-1 w-fit">
            <p>i</p>
            <div v-for="user in users">
                <p>
                    {{user.name}}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    //CONSTANTE
    const users;
    const nom: any = ref(null);
    const iduser: any = ref(null);

    onMounted(async () => {
        axios.get('/users')
            .then((response) => {
                users.value = response.data;
                console.log(users.value[0].nom);
                nom.value = nom.value.map((item: any) => item.nom);
            })
            .catch((error) => {
                console.log(error);
            });
    });
</script>

<style lang="scss">
  
</style>