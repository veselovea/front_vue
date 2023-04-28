Vue.createApp({
    
})
.component('click-counter', {
    template: '#click-counter-template',
    data() {
        return {
            count: 0
        }
    }
})
.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: [ 
            { name: 'Mega brain', price: 500 },
            { name: 'GIGA brain', price: 50000 },
            { name: 'Some brain', price: 250 },
            { name: 'One more BRAIN', price: 10 }
            ]
        }
    }
})
.component('plan', {
    template: '#plan-template',
    props: {
        name: { type: String, default: 'Unknown brain', required: true },
        price: { type: Number, default: 0, required: true }
    }
})
.mount('#app')