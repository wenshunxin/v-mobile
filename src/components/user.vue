<template>
    <div class="wrapper">
        123
        <bottom></bottom>
    </div>
</template>
<script>
import bottom from "./commom/bottom";
import axios from "axios";
    export default{
        components:{
            bottom
        },
        data(){
            return{
                
            }
        },
        created:function(){
            this.handleList();
        },
        methods:{
            handleList:function(){
                var para=this.$route.query.user;
                let url = 'http://www.vue-js.com/api/v1/user/' + para
                console.log(para)
                axios.get(url).then(function(res){
                    console.log(res)
                    // this.object =res.data;
                })
            }
        }

    }
</script>
<style>
    @import "../css/index.css"
</style>
