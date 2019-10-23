<template>
    <div>
        <div>这是一个ts的组件</div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class HelloWorld extends Vue {
    };
</script>

<style scoped>

</style>