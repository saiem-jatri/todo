const app = Vue.createApp({
  data() {
    return {
      searchString: '',
        inputTask:'',
        
        todos: [
            {name:'shahed', status: false},
            {name:'ahamed', status: false},
            {name:'saiem', status: true},
        ]
     };
  },
  methods: {

    addTask() {
      if(this.inputTask == ''){
         alert("task can't be null")
          return
      }
      const todo = { name: this.inputTask, status: false};
      this.todos.unshift(todo);
      this.inputTask = '';
  },
  deleteTask(index) {
    this.todos.splice(index, 1);
},
    changeStatus(){
      this.todos.status = !this.todos.status
    },
  },
  computed: {
    filteredTodos() {
        return this.todos.filter(todo=> {
            return todo.name.toLowerCase().includes(this.searchString) 
          }
        );
    }
}

});

app.mount('#user-goals');