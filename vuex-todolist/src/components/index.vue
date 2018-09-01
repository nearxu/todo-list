<template>
    <div>
        <router-link to='/'>走，去首页</router-link>
        <div>
             <input class="new-todo"
                autofocus
                autocomplete="off"
                placeholder="What needs to be done?"
                @keyup.enter="addTodo"
            >
        </div>
        <div>
            <input 
                id='all'
                type='checkbox'
                :checked='allChecked'
                @change='toggleAll(!allChecked)'
            />
            <label for='all'>all</label>
        </div>
        <ul>
            <TodoItem v-for='(todo,index) in todos' :key='index' :todo='todo'/>
        </ul>
    </div>
</template>

<script>
import Add from './add';
import TodoItem from './item';
import Filter from './filter';
import { mapActions } from 'vuex'
export default {
    components:{
        TodoItem
    },
    methods:{
        ...mapActions(['toggleAll']),
        addTodo(e){
            const val = e.target.value.trim();
            if(val){
                this.$store.dispatch('addTodo',val);
            }
            e.target.value = ''
        }
    },
    computed:{
        todos(){
            return this.$store.state.todos
        },
        filterTodos(){
            return this.todos
            // return filters[this.visible](this.todos)
        },
        allChecked(){
            return this.todos.every(todo => todo.done);
        }
    }
}
</script>
