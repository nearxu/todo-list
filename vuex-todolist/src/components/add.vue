<template>
    <input 
        type='text'
        @keyup.enter='add'
        placeholder="add todo list"
    />
</template>

<script>
export default {
    props:['handleAdd'],
    methods:{
        add(e){
            const val = e.target.value.trim();
            if(val){
                this.handleAdd({
                    id:new Date().getTime,
                    message:val,
                    status:false
                })
                e.target.value = '';
            }
        }
    }
}
</script>

