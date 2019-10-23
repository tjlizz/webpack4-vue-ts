<template>
    <div>
        <div>这是一个ts的组件</div>
        <button @click="test">ww</button>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class HelloWorld extends Vue {

        test(): void {
            this.service({url: '/user/userinfo'}) .then((data:any)=>{
                    //打印mock data
                    console.log(data);
                    if(data.error === 0){

                    }else{

                    }

                });


        }

    };
</script>

<style scoped>

</style>