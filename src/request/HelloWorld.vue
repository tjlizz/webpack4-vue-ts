<template>
    <div>
        <div>这是一个ts的组件</div>
        <button @click="test">ww</button>
        <el-button>21e21e21e21e2</el-button>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class HelloWorld extends Vue {
        test(): void {
        }
    };
</script>

<style scoped>

</style>