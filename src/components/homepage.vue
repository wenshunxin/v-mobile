<template>
    <div class="homepage">
        我是主页
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue'
    // import tabs from './commom/tabs.vue'
    import axios from 'axios'
    export default {
        components: {


            // isheader,
            // tabs,
            BottomNavigation
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style>
    
</style>