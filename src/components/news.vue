<template>
    <div class="wrapper">
        <mu-appbar class="title news" title="消息中心" ></mu-appbar>
        <div style="height:100%;">
            <baidu-map class="map" :center="center" @ready="handler" style="margin:5rem 0;">
                <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"/>
            </baidu-map>
        </div>
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
                msg: 'Welcome to Your Vue.js App',
                center: {lng: 0, lat: 0}
            }
        },
        methods:{
             handler () {
                this.lng = 116.404
                this.lat = 39.915
            }
        }
    }
</script>
<style>
    @import "../css/index.css";
    .map {
        width: 100%;
        height: 100%;
    }
    .news{
        position:fixed;
        top:0;
        left:0;
    }
</style>