let NotificationMessageComponent = {
    template: "#notification-message-template",
    props: {
        type: {type: String, default: 'info'},
        header: {type: String, default: 'GIGA INFO'}
    },
    data() {
        return {
            hidden: false
        }
    },
    methods: {
        hide() {
            this.hidden = true
        }
    }
}

const app = Vue.createApp({
    components: {
        NotificationMessage: NotificationMessageComponent
    }
}).mount('#app')