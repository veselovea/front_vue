let ToDoItemComponent = {
  template: "#todo-item-template",
  props: {
    name: String,
    description: String
  },
  data() {
    return {
      done: false
    }
  }
}

let PlanItemComponent = {
  template: '#plan-item-template',
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

let PlanPickerItemComponent = {
  components: { PlanItem: PlanItemComponent },
  template: '#plan-picker-item-template',
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
  components: { 
      PlanPickerItem: PlanPickerItemComponent,
      TodoItem: ToDoItemComponent
  }
})
.mount('#app')