let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    selected: { type: Boolean, default: false },
  },
  methods:{
    select(){
        this.$emit('select', this.name)
    }
  }
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data(){
    return {
        plans: [ 
            { name: 'Mega brain', price: 500 },
            { name: 'GIGA brain', price: 50000 },
            { name: 'Some brain', price: 250 },
            { name: 'One more BRAIN', price: 10 }
        ],
      selectedPlan: null
    }
  },
  methods:{
    selectPlan(plan){
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { PlanPicker: PlanPickerComponent }
})
.mount('#app')