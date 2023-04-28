let PlanComponent = {
    template: '#plan-template',
    props: {
        name: { type: String, default: 'Unknown brain', required: true },
        price: { type: Number, default: 0, required: true }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: { plan: PlanComponent },
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
}

let ClickCounterComponet = {
    template: '#click-counter-template',
    data() {
        return {
            count: 0
        }
    }
}

const app = Vue.createApp({
    components: { PlanPicker: PlanPickerComponent }
}).mount('#app')