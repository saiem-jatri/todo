const app = Vue.createApp({
  data() {
    return {
      searchString: '',
        inputTask:'',
        showMessege:false,
        nextId:14,
        currentPage:0,
        pageSize:3,
        visibleTodos:[],
        
        todos: [
          {id:1,name:"shahed",isComplete:false},
          {id:2,name:"saiem",isComplete:false},
          {id:3,name:"mohaimen",isComplete:true},
          {id:4,name:"mohaimen",isComplete:true},
          {id:5,name:"mohaimen",isComplete:true},
          {id:6,name:"mohaimen",isComplete:true},
          {id:7,name:"mohaimen",isComplete:true},
          {id:8,name:"mohaimen",isComplete:true},
          {id:9,name:"mohaimen",isComplete:true},
          {id:10,name:"mohaimen",isComplete:true},
          {id:11,name:"mohaimen",isComplete:true},
          {id:12,name:"mohaimen",isComplete:true},
          {id:13,name:"mohaimen",isComplete:true},
        ],
     };
  },
  beforeMount() {
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
   this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // if there are no visible todos, go back page
    if(this.visibleTodos.length == 0 && this.currentPage > 0){
      this.updatePage(this.currentPage - 1);
    }
  },
},

  computed: {
    filterItems(){
      return this.visibleTodos.filter(items=> items.name.toLowerCase().includes(this.searchString))
    },

    afterFilter(){
      return this.filterItems.filter(items =>{
        return items.isComplete === true;
      } )
    },
    totalPages(){
     return Math.ceil(this.todos.length / this.pageSize)
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