<template>
    <ul>
        <li 
            v-for='(item,index) in types'
            :key='index+item'
            :class = 'filterClass(item)'
            @click='handleUpdateFilter(item)'
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    props:['types','handleUpdateFilter','filter'],
    methods:{
        filterClass(filter){
            return {filter:true,active:filter === this.filter}
        }
    }
}
</script>

