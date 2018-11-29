<template>
    <div id="pages">
        <header>
            <header-bar></header-bar>
        </header>
        <keep-alive>
            <router-view class="pages"></router-view>
        </keep-alive>
        
    </div>
</template>

<script>
import headerBar from '../components/Header'
export default {
    name: 'Page',
    components: {
        headerBar
    }
}
</script>

<style>
    header{
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 650px;/*no*/
        left: 50%;
        box-sizing: border-box;
        transform: translateX(-50%);
        background-color: #fff;
        z-index: 888;
    }
    .pages{
        padding: 1.253333rem 0.48rem 0 0.48rem;
        overflow: hidden;
    }
</style>
