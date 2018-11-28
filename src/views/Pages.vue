<template>
    <div>
        <header-bar></header-bar>
        <router-view id="pages"></router-view>
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
    #pages{
        position: absolute;
        top: 1.253333rem;
    }
</style>
