<template>
    <div class="wrapper">
        我的主页
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue'
    // import tabs from './commom/tabs.vue'
    import axios from 'axios'
    // import VueDND from "awe-dnd"
    export default {
        components: {
            // isheader,
            // tabs,
            BottomNavigation
        },
        data() {
            return {
                msg: '😄',
                colors: [{
                    text: "Aquamarine"
                }, {
                    text: "Hotpink"
                }, {
                    text: "Gold"
                }, {
                    text: "Crimson"
                }, {
                    text: "Blueviolet"
                }, {
                    text: "Lightblue"
                }, {
                    text: "Cornflowerblue"
                }, {
                    text: "Skyblue"
                }, {
                    text: "Burlywood"
                }]
            }
        },
         mounted () {
            // this.$dragging.$on('dragged', ({ value }) => {
            //     console.log(value.item)
            //     console.log(value.list)
            //     console.log(value.otherData)
            // })
            // this.$dragging.$on('dragend', () => {  
            // })
        }
    }
</script>
<style>
    @import "../css/index.css";
    .color-item{
        width:49%;
        height:4rem;
        float:left;
        margin-bottom:2px;
        background:red;
        margin-right:2px;
    }
</style>