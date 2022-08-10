const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals1:{
        name:'',
        status:''
      },

      result:[],
      // afterFilterReslt:[...filteredArray]
     };
  },
  methods: {
    addGoal() {
      if(this.goals1.name !=='' && this.goals1.status !==''){
        this.result.unshift({name:this.goals1.name, status:this.goals1.status})
      }
      
    },
    removeGoal(inx){
      this.result.splice(inx,1)
    },
    changeStatus(){
      this.result.status= 'true'
    }
  },
  computed:{
    filteredArray(){
      this.result.filter((value)=>{
        value.name.toLowerCase().includes(this.enteredGoalValue)
      })
    }
    

  }

});

app.mount('#user-goals');