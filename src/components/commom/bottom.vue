<template>
    <mu-paper class="bottomBar">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item to="/home" value="主页" title="主页" icon="restore"/>
            <mu-bottom-nav-item to="/home/publish" value="发布" title="发布" icon="favorite"/>
            <mu-bottom-nav-item to="/home/news" value="消息" title="消息" icon="location_on"/>
            <mu-bottom-nav-item to="/home/mine" value="我的" title="我的" icon="location_on"/>
        </mu-bottom-nav>
    </mu-paper>
</template>
<script>
    export default{
        data(){
            return {
                bottomNav: '主页'
            }
        },
        created:function(){
            this.facthData();
        },
        watch: {
            '$route': 'facthData'
        },
        methods:{
            handleChange(val){
                console.log(val)
                this.bottomNav=val;
            },
            facthData() {
                // let accesstoken = localStorage.getItem("accesstoken");
                //  accesstoken =true;
                // if (accesstoken) {
                //     // console.log('yes')
                //     this.person_path = '/home/personal'
                // } else {
                //     // console.log('no')
                //     this.person_path = '/home/login'
                // }
                if (this.$route.path === '/home') {
                    this.bottomNav = '主页'
                }
                if (this.$route.path === '/home/publish') {
                    this.bottomNav = '发布'
                }
                if (this.$route.path === '/home/news') {
                    this.bottomNav = '消息'
                }
                if (this.$route.path === '/home/mine') {
                    this.bottomNav = '我的'
                }
            }
        }
    }
</script>
<style>
    .bottomBar{
        position:fixed;
        height:5rem;
        width:100%;
        bottom:0;
        left:0;
        background:red;
    }
</style>