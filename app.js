const app = Vue.createApp({
  data() {
    return {
      searchString: '',
        inputTask:'',
        showMessege:false,
        
        todos: [
          {name:"shahed",isComplete:false},
          {name:"saiem",isComplete:false},
          {name:"mohaimen",isComplete:true}
        ],
     };
  },
  methods: {
    addTask() {
      if(this.inputTask == ''){
        setTimeout(()=>{
          this.showMessege = false
        },2000)
        this.showMessege = true
        return
      }
      this.todos.unshift({name:this.inputTask, isComplete:false})
      this.inputTask=''
  },
  deleteTask(index) {
    this.todos.splice(index, 3);
},

changeStatus(){
 this.filterItems.isComplete = !this.filterItems.isComplete
}
},

  computed: {
    filterItems(){
      return this.todos.filter(items=> items.name.toLowerCase().includes(this.searchString))
    },

    afterFilter(){
      return this.filterItems.filter(items => items.isComplete)
    }

}

});

app.mount('#user-goals');