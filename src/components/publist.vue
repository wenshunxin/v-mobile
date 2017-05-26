<template>
    <div class="wrapper">
        <mu-appbar class="title" title="发布中心"></mu-appbar>
        <!--<swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>-->
            <silder :pages="pages" :sliderinit="sliderinit">
    <!-- slot  -->
            </silder>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue';
    import Vue from "vue";
    // import Swiper from "../assets/js/swiper-3.4.2.min.js";
    // import tabs from './commom/tabs.vue'
    // import { Swipe, SwipeItem } from 'vue-swipe';
    import silder  from './commom/slide.vue'// 引入slider组件
    import axios from 'axios'
    new Vue(silder)
    export default {
        components: {
            // isheader,
            // tabs,
            BottomNavigation,
            silder
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                pages:[
          {
            title: 'slide1',
            style:{
             background:'#222'
            }
          },
          {
           title: 'slide2',
           style:{
            background:'red'
            }
          },
          {
            title: 'slide3',
            style:{
              background:'#4bbfc3',
            },
          },
          {
            title: 'slide4',
            style:{
              background:'#4aafc3',
            },
          }
        ],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
        //   thresholdDistance: 500,//滑动判定距离
        //   thresholdTime: 100,//滑动判定时间
          autoplay:1000,//自动滚动[ms]
          loop:true//循环滚动
        //   direction:'horizontal',//方向设置，垂直滚动
        //   infinite:1,//无限滚动前后遍历数
        //   slidesToScroll:1,//每次滑动项数
        }
            }
        },
         mounted () {
            console.log('挂载好了')
            // var mySwiper = new Swiper('.my-swipe', {
            //     direction: 'horizontal',
            //     loop: true
            // })
            // console.log(mySwiper)
        }
    }
</script>
<style>
    @import "../css/index.css";
    @import "../css/swiper-3.4.2.min.css";
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }

    .slide2 {
        background-color: #ffd705;
        color: #000;
    }

    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
     }
     .slider-container{
         width:100% !important;
        margin:0 ! important;
     }
</style>