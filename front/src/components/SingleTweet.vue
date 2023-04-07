<template>
    <div class="px-5 py-3 border-b border-lighter flex">
        <div class="flex-none">
            <img src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png" class="flex-none w-12 h-12 rounded-full border border-pink-600" />
        </div>
        <div>
            <p class="font-bold ml-5">
                
            </p>
            <p class="ml-5 mt-3 pb-3 w-full focus:outline-none h-16" maxlength="280" v-model="message">
                
            </p>
            <div class="flex justify-between text-xl ml-5">
                <button class="hover:bg-pink-100 rounded-full h-10 w-10">
                    <i class="fa fa-comment" aria-hidden="true"></i>
                </button>
                <button class="hover:bg-pink-100 rounded-full ml-52 h-10 w-10">
                    <i class="fa fa-retweet " aria-hidden="true"></i>
                </button>
                <button class="hover:bg-pink-100 rounded-full ml-52 h-10 w-10">
                    <i class="fa fa-heart "></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from 'vue'

    const props = defineProps({
        tweet: {
            required: true
        }
    })

    function sendTweet(content) {
        axios.post("http://localhost:8000/tweets/1", {
            iduser: iduser.value,
            message: message.value
        })
            .then(response => {
                console.log(response)
            })
    }

    axios.get("http://51.83.36.122:81/read")
        .then(response => {
            response.data.forEach(tweet => tweets.push(tweet))
            lastTimestamp.value = response.data[0].timestamp
        })

</script>