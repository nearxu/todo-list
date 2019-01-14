<template>
  <div class="header">
    {{title}}
    <button @click="back">backasa</button>
  </div>
</template>

<script>
export default {
  props: ["title", "back"]
};
</script>
