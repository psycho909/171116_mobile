import Vue from 'vue'
import VueRouter from 'vue-router'
import Lottera from './LotterA.vue'
import Lotterb from './LotterB.vue'
import Happy10mina from './Happy10mina.vue'
import Happy10minb from './Happy10minb.vue'
import Happy10minc from './Happy10minc.vue'
import Happy10mind from './Happy10mind.vue'
import Pk10 from './Pk10.vue'
import Lukyairship from './LukyAirShip.vue'
import Elevenlist from './ElevenList.vue'
import Order3 from './Order3.vue'
import Fu3d from './Fu3d.vue'
import Shanghai from './Shanghai.vue'

Vue.use(VueRouter)

var routes=[
    {path:'/',name:'Lottera',component:Lottera},
    {path:'/Lotterb',name:'Lotterb',component:Lotterb},
    {path:'/Happy10mina',name:'Happy10mina',component:Happy10mina},
    {path:'/Happy10minb',name:'Happy10minb',component:Happy10minb},
    {path:'/Happy10minc',name:'Happy10minc',component:Happy10minc},
    {path:'/Happy10mind',name:'Happy10mind',component:Happy10mind},
    {path:'/Pk10',name:'Pk10',component:Pk10},
    {path:'/Lukyairship',name:'Lukyairship',component:Lukyairship},
    {path:'/Elevenlist',name:'Elevenlist',component:Elevenlist},
    {path:'/Order3',name:'Order3',component:Order3},
    {path:'/Fu3d',name:'Fu3d',component:Fu3d},
    {path:'/Shanghai',name:'Shanghai',component:Shanghai},
]

var router=new VueRouter({
    routes
})

var menuList=[
    {path:'/',name:'重庆时时彩',data:'Lottera'},
    {path:'/Lotterb',name:'天津时时彩',data:'Lotterb'},
    {path:'/Happy10mina',name:'广东快乐十分',data:'Happy10mina'},
    {path:'/Happy10minb',name:'广西快乐十分',data:'Happy10minb'},
    {path:'/Happy10minc',name:'天津快乐十分',data:'Happy10minc'},
    {path:'/Happy10mind',name:'重庆快乐十分',data:'Happy10mind'},
    {path:'/Pk10',name:'北京赛车PK10',data:'Pk10'},
    {path:'/Lukyairship',name:'幸运飞艇',data:'LukyAirShip'},
    {path:'/Elevenlist',name:'广东11选5',data:'ElevenList'},
    {path:'/Order3',name:'排列三',data:'Order3'},
    {path:'/Fu3d',name:'福彩3D',data:'Fu3d'},
    {path:'/Shanghai',name:'上海时时乐',data:'Shanghai'}
]
export default new Vue({
    el:'#app',
    router,
    mounted(){
    },
    created(){
        this.$nextTick(function(){
            var navHeight=$('.navbar').outerHeight();
            var lastHeight=$('.last-open-box').outerHeight();
            var nowHeight=$('.now-open-box').outerHeight();
            var playHeight=$('.play-box').outerHeight()||0;
            var swiperHeight=$('.swiper-wrapper').outerHeight()||0;
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
            var wHeight=$(window).height();
            $('.mainbody-box').height(wHeight-saveHeight+'px')
            $('.menu-group').height(wHeight+'px')
            $('.game-list-menu').height(wHeight-saveHeight+'px')
            console.log('created')
        })
    },
    components:{
        Lottera,
        Lotterb,
        Happy10mina,
        Happy10minb,
        Happy10minc,
        Happy10mind,
        Pk10,
        Lukyairship,
        Elevenlist,
        Order3,
        Fu3d,
        Shanghai
    },
    methods:{
        menuListSelect(event){
            console.log('router')
            var _event=event
            this.game_name=event.currentTarget.dataset.menu
            event.currentTarget.parentNode.classList.remove('show')
            setTimeout(function(){
                _event.target.parentNode.parentNode.classList.remove('show')
            },300)
            console.log('router')
        }
    },
    data(){
        return{
            menuList:menuList,
            game_name:'Lottera',
        }
    },
})
$(function(){
    var navHeight=$('.navbar').outerHeight();
    var lastHeight=$('.last-open-box').outerHeight();
    var nowHeight=$('.now-open-box').outerHeight();
    var playHeight=$('.play-box').outerHeight()||0;
    var swiperHeight=$('.swiper-wrapper').outerHeight()||0;
    var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
    var wHeight=$(window).height();
    $('.mainbody-box').height(wHeight-saveHeight+'px')
    $('.menu-group').height(wHeight+'px')
    $('.game-list-menu').height(wHeight-saveHeight+'px')
})