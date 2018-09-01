<template>
    <div>
        <h1> test vuex</h1>
        <router-link to='/todolist'>test todolist</router-link>
        <p>{{$store.state.count}}</p>
        <button @click='increase'>+</button>
        <button @click='decrease'>-</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:mapActions([
        'increase',
        'decrease'
    ])
}
</script>

