const app = Vue.createApp({
  data() {
    return {
      searchString: '',
        inputTask:'',
        showMessege:false,
        currentPage:0,
        pageSize:3,
        visibleTodos:[],
        sortBy:'name',
        
        todos: [
          {name:"akil",isComplete:false},
          {name:"khalid",isComplete:false},
          {name:"shorif",isComplete:true},
          {name:"emon",isComplete:true},
          {name:"abid",isComplete:false},
          {name:"salman",isComplete:true},
          {name:"tarek",isComplete:true},
          {name:"mehedi",isComplete:true},
          {name:"nahid",isComplete:false},
          {name:"imran",isComplete:true},
          {name:"joyonto",isComplete:false},
          {name:"ibrarim",isComplete:true},
          {name:"masud",isComplete:false},
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


    
updatePage(pageNumber){
  this.currentPage = pageNumber;
  this.updateVisibleTodos();
},

updateVisibleTodos(){
    let initialSortingTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
          .sort((a,b)=>{
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
          })
   this.visibleTodos = initialSortingTodos;
   console.log("heeeee", this.visibleTodos) 
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
    changeStatus(){
     return this.filterItems.isComplete = !this.filterItems.isComplete
     },

    afterFilter(){
      return this.visibleTodos.filter(items =>{
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
    },
},
watch: {
  sortBy(value) {
    if(value === 'name'){
      this.visibleTodos = this.visibleTodos.sort((a,b)=>{
          if(a.name > b.name){
            return 1;
          }else{
            return -1
          }
        })
      }else if(value === 'status'){
        this.visibleTodos = this.visibleTodos.sort((a)=>{
          if(a.isComplete === true){
            return -1
          }else{
            return 1
          }
        })
      }
  }
}

});

app.mount('#user-goals');