<template>
    <div id="pages">
        <header>
            <header-bar></header-bar>
        </header>
        <router-view class="pages"></router-view>
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
    }
    .pages{
        padding-top: 1.253333rem;
    }
</style>
