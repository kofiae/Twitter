import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const twitterStore = defineStore('twitter', () => {

    const users = reactive([])
    const lastTimestamp = ref(0)

    const user = ref("Bussy")

    // Chargement initial
    axios.get("http://localhost:8000/users")
        .then(response => {
            response.data.forEach(user => users.push(user))
            lastTimestamp.value = response.data[0].timestamp
        })



    function sendTweet(content) {
        axios.post("http://localhost:8000/users", {
            user: user.value,
            content: content.value
        })
            .then(response => {
                console.log(response)
            })
    }


    return { tweets, user, sendTweet }

})
