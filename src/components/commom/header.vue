<template>
    <div class="hello">
        <mu-appbar class="title" title="Vue.js 中文社区" >
            <!--// <mu-icon-button slot="left">
            //     <img class="logo" :src="src"
            // </mu-icon-button>-->
            <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
            <mu-icon-menu slot="right" icon="more_vert" :value="theme" @change="changeTheme">
                <mu-menu-item title="LIGHT" value="light" />
                <mu-menu-item title="CARBON" value="carbon" />
                <mu-menu-item title="TEAL" value="teal" />
            </mu-icon-menu>
        </mu-appbar>
        <mu-drawer :open="open" :docked="docked" @close="toggle()" style="width:40%;">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="Menu Item 1"/>
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
                <mu-list-item v-if="docked" @click.native="open = false" title="退出"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<script>
    import axios from 'axios'
    import light from '!raw-loader!muse-ui/dist/theme-default.css'
    import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
    import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
    export default {
        name: 'hello',
        data() {
            return {
                theme: 'teal',
                src:"http://www.vue-js.com/public/images/vue.png",
                themes: {
                    light,
                    carbon,
                    teal
                },
                open: false,
                docked: true
            }
        },
        methods: {
            changeTheme(theme) {
                this.theme = theme;
                console.log(this.theme)
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                // console.log(styleEl)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                // console.log(styleEl)
                return styleEl
            },
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
                console.log(event)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        text-align: center;
        height: 5rem;
    }
    .mu-icon-button {
        padding: 0.4rem;
    }
</style>
