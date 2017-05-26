<template>  
    <div class="wrapper">
        <mu-appbar class="title" :title="data.title" style="position:fixed;top:0;">
            <mu-icon-button @click="goBack" icon="arrow_back" slot="left" />
        </mu-appbar>
        <div v-html="content" style="margin:5rem 0;"></div>
        <bottom></bottom>
    </div>
</template>
<script>
    import bottom from "./commom/bottom.vue";
    import axios from "axios"
    export default{
        components:{
            bottom
        },
        data(){
            return{
                data:{
                    title:""
                },
                content:"",
				html:"121212555"
            }
        },
        created:function(){
            this.handleList();
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            handleList(){
                let id = this.$route.query.id
                let that = this
                let url = 'http://www.vue-js.com/api/v1/topic/' + id
                axios.get(url).then(function(res){
                    console.log(res)
                    that.data.title=res.data.data.title;
                    that.content=res.data.data.content
                })
            }
        }
    }
</script>
<style>
    @import "../css/index.css"
</style>
