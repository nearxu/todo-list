<template>
    <div>
        <input 
            type='checkbox' 
            :checked='todo.done' 
            @change='toggleTodo(todo)'
        />
        <label v-text='todo.text' @click="editing = true"></label>
        <button @click='removeTodo(todo)'>remove</button>
        <input 
            v-show='editing' 
            :value='todo.text'
            @keyup.enter='doneEdit'
            @blur='doneEdit'
            placeholder="label for show"
        />
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data(){
        return {
            editing:false
        }
    },
    props:['todo'],
    methods:{
        ...mapActions(['editTodo','toggleTodo','removeTodo']),
        doneEdit(e){
            const value = e.target.value.trim();
            const {todo} = this;
            if(!value){
                this.removeTodo(todo);
            }else if(this.editing){
                this.editTodo({todo,value});
                this.editing = false
            }

        }
    }
}
</script>

