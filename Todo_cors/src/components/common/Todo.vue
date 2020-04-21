<template>
  <div class="todo">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: [],
      todoEntities: []
    }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
		addTodo(todoItem) {
			localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
      
      //foront end Url을 적어 줌
      /*const baseURI = 'http://localhost:5000'
      this.$http.get(`${baseURI}/todos`)
      .then((result) => {
        console.log(result);
        //this.todoItems = result.data.todoEntities;
      })*/
		},
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  created() {
      const baseURI = 'http://localhost:5000'
      this.$http.get(`${baseURI}/todos`)
      .then((result) => {
        console.log(result.data._embedded.todoEntities);
        this.todoEntities = result.data._embedded.object.todoEntities;
      })

console.log(this.todoEntities.length);
	if (this.todoEntities.length > 0) {
      for (var i = 0; i < this.todoEntities.length; i++) {
        //localStorage.push(this.todoEntities(i).desc);
        //this.todoItems.push(this.todoEntities(i).desc);
        console.log(this.todoEntities[i].desc);
        localStorage.setItem(this.todoEntities[i].desc, this.todoEntities[i].desc);
        this.todoItems.push(this.todoEntities[i].desc);
      }
  }

	//	if (localStorage.length > 0) {
	//		for (var i = 0; i < localStorage.length; i++) {
	//			this.todoItems.push(localStorage.key(i));
	//		}
	//	}
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 20%;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
