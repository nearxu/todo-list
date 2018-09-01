<template>
    <div>
        <router-link to='/'>走，去首页</router-link>
        <input class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            @keyup.enter="addTodo"
        >
        <p v-for='(todo,index) in todos' :key='index'>{{todo.text}}</p>
    </div>
</template>

<script>
import Add from './add';
import Item from './item';
import Filter from './filter';
import { mapActions } from 'vuex'
export default {
    methods:{
        // ...mapActions([]),
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
        }
    }
}
</script>
