let GithubUserCardComponent = {
    template: "#github-user-card-template",
    props: {
        username: {type: String, required: true}
    },
    data() {
        return {
            user: {}
        }
    },
    async created() {
        const response = await axios.get(`https://api.github.com/users/${this.username}`)
        this.user = response.data
    }
}

const app = Vue.createApp({
    components: {
        GithubUserCard: GithubUserCardComponent
    },
    data() {
        return {
            users: ["veselovea", "Me10ne", "ShoulinSS", "dm1moshencko"]
        }
    }
})
.mount('#app')