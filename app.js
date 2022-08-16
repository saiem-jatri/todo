const app = Vue.createApp({
  data() {
    return {
      searchString: '',
        inputTask:'',
        showMessege:false,
        // nextId:14,
        currentPage:0,
        pageSize:3,
        visibleTodos:[],
        
        todos: [
          {name:"shahed",isComplete:false},
          {name:"saiem",isComplete:false},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:false},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:false},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:false},
          {name:"mohaimen",isComplete:true},
          {name:"mohaimen",isComplete:false},
        ],
     };
  },
  created() {
    this.updateVisibleTodos();
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
      this.updateVisibleTodos();
  },
  deleteTask(index) {
    this.todos.splice(index, 1);
    this.updateVisibleTodos();
},

changeStatus(){
 this.filterItems.isComplete = !this.filterItems.isComplete
},
    
updatePage(pageNumber){
  this.currentPage = pageNumber;
  this.updateVisibleTodos();
},

updateVisibleTodos(){
   this.visibleTodos = this.filterItems.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
   console.log(this.visibleTodos) 
   // if there are no visible todos, go back page
    if(this.visibleTodos.length == 0 && this.currentPage > 0){
      this.updatePage(this.currentPage - 1);
    }
  },
},

  computed: {
    filterItems(){
      if(this.searchString == '') {
        return this.todos;
      } else {
        return this.todos.filter(items=> items.name.toLowerCase().includes(this.searchString))
      }
      
    },

    afterFilter(){
      return this.filterItems.filter(items =>{
        return items.isComplete === true;
      })
    },
    totalPages(){
     return Math.ceil(this.filterItems.length / this.pageSize)
    },
    showPreviousLink(){
      return this.currentPage == 0 ? false : true;
    },

    showNextLink(){
      return this.currentPage == (this.totalPages -1) ? false : true;
    }
}

});

app.mount('#user-goals');