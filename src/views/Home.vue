<template>
    <div class="home">
        <ul class="nav">
            <li v-for="(nav,index) in navs" :key="index">
                <router-link :to="{path: '/'}">{{nav.name}}</router-link>
            </li>
        </ul>
        <section class="recommend">
            <router-link :to="{path: '/'}" class="recommend-item" v-for="(recommend,index) in recommendList" :key="index">
                <div class="content">
                    <div class="cover" :style="{backgroundImage: 'url('+ recommend.image +')'}"><div style="padding-top: 100%;"></div></div>
                    <h3>{{recommend.title}}</h3>
                    <p>{{recommend.content | subStr}}</p>
                    
                </div>
                <div class="author">
                    by
                    <span class="name">{{recommend.owner.name}}</span>
                </div>
            </router-link>
        </section>
        <button type="button" @click="recom">获取数据</button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components:{
    },
    data(){
        return {
            msgg: 'props',
            navs: [
                {name: '影院热映'},
                {name: '影院热映'},
                {name: '影院热映'},
                {name: '影院热映'}
            ],
            recommendList:[]
        }
    },
    methods: {
        recom(){
            this.$http.get('/api/event/list?loc=108288&start=0&count=5').
            then( res => {
                this.recommendList = res.data.events;
            }).
            catch( err => {
                console.log(err)
            })
        }
    },
    filters: {
        subStr: function (value) {
            let newVal = value.replace(/<.*?>/g, '')
            return newVal
        }
  }
}
</script>

<style lang="scss">
.nav{
    overflow: hidden;
    margin: .533333rem 0 0 0;
    li{
        float: left;
        width: 50%;
        padding: .08rem;
        font-size: .4rem;
        box-sizing: border-box;
        a{
            background-color: #f6f6f6;
            color: #494949;
            display: block;
            text-align: center;
            line-height: .533333rem;
            padding: .32rem 0;
            border-radius: 2px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
    }
}

.recommend{
    .recommend-item{
        display: block;
        padding: .666667rem 0 .666667rem 0;
        position: relative;
        color: #494949;
        .content{
            overflow: hidden;
            margin-bottom: .266667rem;
            h3{
                text-align: justify;
                font-size: .453333rem;
                font-weight: 500;
                color: #494949;
                margin-bottom: .16rem;
                word-wrap: break-word; 
                line-height: 1.41;
            }
            p{
                word-wrap: break-word; 
                text-align: justify;
                color: #aaa;
                font-size: .32rem;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
            .cover{
                width: 25.6%;
                margin-left: 25px;
                float: right;
                position: relative;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                background-color: rgb(250, 250, 250)
            }
        }
        .author{
            font-size: .32rem;
            color: #ccc;
        }
    }
}
</style>
