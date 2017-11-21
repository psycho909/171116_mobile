import lotterA0 from '../components/lotter-a0.html'
import lotterTitle from '../components/lotter-title.html'
import vueSwiper from '../components/vue-swiper.html'

var mixinCreated={
    created(){
        this.$nextTick(function(){
            console.log('mixin')
            var navHeight=$('.navbar').outerHeight();
            var lastHeight=$('.last-open-box').outerHeight();
            var nowHeight=$('.now-open-box').outerHeight();
            var playHeight=$('.play-box').outerHeight();
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight;
            var wHeight=$(window).height();
            $('.mainbody-box').height(wHeight-saveHeight+'px')
            $('.menu-group').height(wHeight-saveHeight+'px')
            $('.game-list-menu').height(wHeight-saveHeight+'px')
        })
    }
}

Vue.component('lotter-a0',{
    template:lotterA0,
    mixins:[mixinCreated],
    props:['bets','i'],
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        betActive:function(){
            this.isActive=!this.isActive;
        }
    }
})
Vue.component('lotter-title',{
    template:lotterTitle,
    props:['title']
})
Vue.component('vue-swiper',{
    template:vueSwiper,
    props:['list'],
    mounted() {
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 2
            });
        })
    },
    data(){
        return {
            isActive:false
        }
    }
})
var menuList=[
    {name:'重庆时时彩',data:'lottera'},
    {name:'天津时时彩',data:'lotterb'},
    {name:'广东快乐十分',data:'happy10mina'},
    {name:'广西快乐十分',data:'happy10minb'},
    {name:'天津快乐十分',data:'happy10minc'},
    {name:'重庆快乐十分',data:'happy10mind'},
    {name:'北京赛车PK10',data:'pk10'},
    {name:'幸运飞艇',data:'lukyAirShip'},
    {name:'广东11选5',data:'elevenList'},
    {name:'排列三',data:'order3'},
    {name:'福彩3D',data:'3d'},
    {name:'上海时时乐',data:'shanghai'}
]
var lotteraList=[
    {name:'整合',active:true},
    {name:'牛牛 梭哈',active:false},
    {name:'前中后',active:false},
]
var lotterbList=[
    {name:'整合',active:true},
    {name:'牛牛 梭哈',active:false},
    {name:'前中后',active:false},
]
var happy10mina=[
    {name:'整合',active:true},
    {name:'连码',active:false},
]
var happy10minb=[
    {name:'整合',active:true},
    {name:'连码',active:false},
]
var happy10minc=[
    {name:'整合',active:true},
    {name:'连码',active:false},
]
var pk10=[
    {name:'整合',active:true}
]
var lukyAirShip=[
    {name:'整合',active:true}
]
var elevenList=[
    {name:'整合',active:true},
    {name:'前中後',active:false},
]
var order3List=[
    {name:'整合',active:true}
]
var threedList=[
    {name:'整合',active:true}
]
var shanghaiList=[
    {name:'整合',active:true}
]
var app=new Vue({
    el:'#app',
    created(){
        this.$nextTick(function(){
            // $('.mainbody .bet').on('click', function () {
            //     var num=Number($(this).closest('.mainbody-box').attr('data-num'));
            //     $(this).toggleClass('active')
            //     $('.bet-num').text($('.mainbody .bet.active').length)
            //     if( $('.game-list').eq(num).hasClass('active') && $('.mainbody .bet.active').length >= 1){
            //         $('.game-list').eq(num).addClass('has-bet')
            //     }else if($('.mainbody .bet.active').length == 0){
            //         $('.game-list').eq(num).removeClass('has-bet')
            //     }
            // })
        })
    },
    created(){
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView:2,
                spaceBetween: 2
            });
        })
    },
    updated() {
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView:2,
                spaceBetween: 2
            });
        })
    },
    watch:{
        menuListSelectData:function(){
            this.$nextTick(function(){
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 2
                });
            })
        }
    },
    data:{
        menuList:menuList,
        lotteraList:lotteraList,
        lotterbList:lotterbList,
        happy10mina:happy10mina,
        happy10minb:happy10minb,
        happy10minc:happy10minc,
        pk10:pk10,
        lukyAirShip:lukyAirShip,
        elevenList:elevenList,
        order3List:order3List,
        threedList:threedList,
        shanghaiList:shanghaiList,
        menuListSelectData:'lottera',
        gameListSelectNum:0,
        bet_length:0,
        active:false,
        happy10a:0,
        order3:0,
        lotter_a:[
            {name:'总合大',num:1.982,col:'col-6',ball:false},
            {name:'总合小',num:1.982,col:'col-6',ball:false},
            {name:'总合单',num:1.982,col:'col-6',ball:false},
            {name:'总合双',num:1.982,col:'col-6',ball:false},
            {name:'龙',num:1.982,col:'col-4',ball:false},
            {name:'虎',num:1.982,col:'col-4',ball:false},
            {name:'和',num:1.982,col:'col-4',ball:false},
        ],
        lotter_ball:[
            {name:'0',num:9.85,col:'col-6',ball:true},
            {name:'1',num:9.85,col:'col-6',ball:true},
            {name:'2',num:9.85,col:'col-6',ball:true},
            {name:'3',num:9.85,col:'col-6',ball:true},
            {name:'4',num:9.85,col:'col-6',ball:true},
            {name:'5',num:9.85,col:'col-6',ball:true},
            {name:'6',num:9.85,col:'col-6',ball:true},
            {name:'7',num:9.85,col:'col-6',ball:true},
            {name:'8',num:9.85,col:'col-6',ball:true},
            {name:'9',num:9.85,col:'col-6',ball:true},
            {name:'大',num:9.85,col:'col-6',ball:false},
            {name:'小',num:9.85,col:'col-6',ball:false},
            {name:'單',num:9.85,col:'col-6',ball:false},
            {name:'雙',num:9.85,col:'col-6',ball:false},
        ],
        nunu:[
            {name:'牛1',num:94.8,col:'col-4',ball:false},
            {name:'牛2',num:94.8,col:'col-4',ball:false},
            {name:'牛3',num:94.8,col:'col-4',ball:false},
            {name:'牛4',num:94.8,col:'col-4',ball:false},
            {name:'牛5',num:94.8,col:'col-4',ball:false},
            {name:'牛6',num:94.8,col:'col-4',ball:false},
            {name:'牛7',num:94.8,col:'col-4',ball:false},
            {name:'牛8',num:94.8,col:'col-4',ball:false},
            {name:'牛9',num:94.8,col:'col-4',ball:false},
            {name:'無牛',num:94.8,col:'col-4',ball:false},
            {name:'牛牛',num:94.8,col:'col-4',ball:false},
            {name:'牛大',num:94.8,col:'col-4',ball:false},
            {name:'牛單',num:94.8,col:'col-4',ball:false},
            {name:'牛雙',num:94.8,col:'col-4',ball:false},
            {name:'牛小',num:94.8,col:'col-4',ball:false},
        ],
        suoha:[
            {name:'四條',num:94.8,col:'col-4',ball:false},
            {name:'三條',num:94.8,col:'col-4',ball:false},
            {name:'葫蘆',num:94.8,col:'col-4',ball:false},
            {name:'順子',num:94.8,col:'col-4',ball:false},
            {name:'兩對',num:94.8,col:'col-4',ball:false},
            {name:'一對',num:94.8,col:'col-4',ball:false},
            {name:'散號',num:94.8,col:'col-4',ball:false}
        ],
        lotter_baa:[
            {name:'豹子',num:70,col:'col-6',ball:false},
            {name:'順子',num:70,col:'col-6',ball:false},
            {name:'對子',num:70,col:'col-6',ball:false},
            {name:'杂六',num:70,col:'col-6',ball:false},
            {name:'半順',num:70,col:'col-12',ball:false},
        ],
        happy10_a:[
            {name:'总和大',num:70,col:'col-6',ball:false},
            {name:'总和小',num:70,col:'col-6',ball:false},
            {name:'总和单',num:70,col:'col-6',ball:false},
            {name:'总和双',num:70,col:'col-6',ball:false},
        ],
        happy10_balla:[
            {name:1,num:70,col:'col-6',ball:true},
            {name:2,num:70,col:'col-6',ball:true},
            {name:3,num:70,col:'col-6',ball:true},
            {name:4,num:70,col:'col-6',ball:true},
            {name:5,num:70,col:'col-6',ball:true},
            {name:6,num:70,col:'col-6',ball:true},
            {name:7,num:70,col:'col-6',ball:true},
            {name:8,num:70,col:'col-6',ball:true},
            {name:9,num:70,col:'col-6',ball:true},
            {name:10,num:70,col:'col-6',ball:true},
            {name:11,num:70,col:'col-6',ball:true},
            {name:12,num:70,col:'col-6',ball:true},
            {name:13,num:70,col:'col-6',ball:true},
            {name:14,num:70,col:'col-6',ball:true},
            {name:15,num:70,col:'col-6',ball:true},
            {name:16,num:70,col:'col-6',ball:true},
            {name:17,num:70,col:'col-6',ball:true},
            {name:18,num:70,col:'col-6',ball:true},
            {name:19,num:70,col:'col-6',ball:true},
            {name:20,num:70,col:'col-6',ball:true},
            {name:'大',num:70,col:'col-6',ball:false},
            {name:'小',num:70,col:'col-6',ball:false},
            {name:'单',num:70,col:'col-6',ball:false},
            {name:'双',num:70,col:'col-6',ball:false},
            {name:'龙',num:70,col:'col-6',ball:false},
            {name:'虎',num:70,col:'col-6',ball:false},
        ],
        happy10_ballb:[
            {name:1,num:70,col:'col-4',ball:true},
            {name:2,num:70,col:'col-4',ball:true},
            {name:3,num:70,col:'col-4',ball:true},
            {name:4,num:70,col:'col-4',ball:true},
            {name:5,num:70,col:'col-4',ball:true},
            {name:6,num:70,col:'col-4',ball:true},
            {name:7,num:70,col:'col-4',ball:true},
            {name:8,num:70,col:'col-4',ball:true},
            {name:9,num:70,col:'col-4',ball:true},
            {name:10,num:70,col:'col-4',ball:true},
            {name:11,num:70,col:'col-4',ball:true},
            {name:12,num:70,col:'col-4',ball:true},
            {name:13,num:70,col:'col-4',ball:true},
            {name:14,num:70,col:'col-4',ball:true},
            {name:15,num:70,col:'col-4',ball:true},
            {name:16,num:70,col:'col-4',ball:true},
            {name:17,num:70,col:'col-4',ball:true},
            {name:18,num:70,col:'col-4',ball:true},
            {name:19,num:70,col:'col-6',ball:true},
            {name:20,num:70,col:'col-6',ball:true},
            {name:'大',num:70,col:'col-6',ball:false},
            {name:'小',num:70,col:'col-6',ball:false},
            {name:'单',num:70,col:'col-6',ball:false},
            {name:'双',num:70,col:'col-6',ball:false}
        ],
        happy10_con_menu:[
            {name:'任选一',active:true},
            {name:'任选二',active:false},
            {name:'任选三',active:false},
            {name:'任选四',active:false},
            {name:'任选五',active:false},
        ],
        happy10_con:[
            {name:1,num:false,col:'col-4',ball:true},
            {name:2,num:false,col:'col-4',ball:true},
            {name:3,num:false,col:'col-4',ball:true},
            {name:4,num:false,col:'col-4',ball:true},
            {name:5,num:false,col:'col-4',ball:true},
            {name:6,num:false,col:'col-4',ball:true},
            {name:7,num:false,col:'col-4',ball:true},
            {name:8,num:false,col:'col-4',ball:true},
            {name:9,num:false,col:'col-4',ball:true},
            {name:10,num:false,col:'col-4',ball:true},
            {name:11,num:false,col:'col-4',ball:true},
            {name:12,num:false,col:'col-4',ball:true},
            {name:13,num:false,col:'col-4',ball:true},
            {name:14,num:false,col:'col-4',ball:true},
            {name:15,num:false,col:'col-4',ball:true},
            {name:16,num:false,col:'col-4',ball:true},
            {name:17,num:false,col:'col-4',ball:true},
            {name:18,num:false,col:'col-4',ball:true},
            {name:19,num:false,col:'col-4',ball:true},
            {name:20,num:false,col:'col-4',ball:true}
        ],
        pk:[
            {name:3,num:20.6,col:'col-4',ball:false},
            {name:4,num:20.6,col:'col-4',ball:false},
            {name:5,num:20.6,col:'col-4',ball:false},
            {name:6,num:20.6,col:'col-4',ball:false},
            {name:7,num:20.6,col:'col-4',ball:false},
            {name:8,num:20.6,col:'col-4',ball:false},
            {name:9,num:20.6,col:'col-4',ball:false},
            {name:10,num:20.6,col:'col-4',ball:false},
            {name:11,num:20.6,col:'col-4',ball:false},
            {name:12,num:20.6,col:'col-4',ball:false},
            {name:13,num:20.6,col:'col-4',ball:false},
            {name:14,num:20.6,col:'col-4',ball:false},
            {name:15,num:20.6,col:'col-6',ball:false},
            {name:16,num:20.6,col:'col-6',ball:false},
        ],
        pk_a:[
            {name:1,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:2,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:3,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:4,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:5,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:6,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:7,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:8,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:9,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:10,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:'大',num:20.6,col:'col-6',circle:false,ball:false},
            {name:'小',num:20.6,col:'col-6',circle:false,ball:false},
            {name:'单',num:20.6,col:'col-6',circle:false,ball:false},
            {name:'双',num:20.6,col:'col-6',circle:false,ball:false},
            {name:'龙',num:20.6,col:'col-6',circle:false,ball:false},
            {name:'虎',num:20.6,col:'col-6',circle:false,ball:false},
        ],
        pk_b:[
            {name:1,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:2,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:3,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:4,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:5,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:6,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:7,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:8,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:9,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:10,num:20.6,col:'col-6',circle:'circle',ball:false},
            {name:'大',num:20.6,col:'col-6',ball:false},
            {name:'小',num:20.6,col:'col-6',ball:false},
            {name:'单',num:20.6,col:'col-6',ball:false},
            {name:'双',num:20.6,col:'col-6',ball:false}
        ],
        eleven_a:[
            {name:'总和大',num:20.6,col:'col-6',ball:false},
            {name:'总和小',num:20.6,col:'col-6',ball:false},
            {name:'总和单',num:20.6,col:'col-6',ball:false},
            {name:'总和双',num:20.6,col:'col-6',ball:false},
            {name:'总和龙',num:20.6,col:'col-6',ball:false},
            {name:'总和虎',num:20.6,col:'col-6',ball:false},
        ],
        eleven_ball:[
            {name:1,num:20.6,col:'col-4',ball:true},
            {name:2,num:20.6,col:'col-4',ball:true},
            {name:3,num:20.6,col:'col-4',ball:true},
            {name:4,num:20.6,col:'col-4',ball:true},
            {name:5,num:20.6,col:'col-4',ball:true},
            {name:6,num:20.6,col:'col-4',ball:true},
            {name:7,num:20.6,col:'col-4',ball:true},
            {name:8,num:20.6,col:'col-4',ball:true},
            {name:9,num:20.6,col:'col-4',ball:true},
            {name:10,num:20.6,col:'col-6',ball:true},
            {name:11,num:20.6,col:'col-6',ball:true},
            {name:'大',num:20.6,col:'col-6',ball:false},
            {name:'小',num:20.6,col:'col-6',ball:false},
            {name:'单',num:20.6,col:'col-6',ball:false},
            {name:'双',num:20.6,col:'col-6',ball:false},
        ],
        eleven_baa:[
            {name:'順子',num:70,col:'col-6',ball:false},
            {name:'杂六',num:70,col:'col-6',ball:false},
        ],
        order3_menu:[
            {name:'第一球',active:true},
            {name:'第二球',active:false},
            {name:'第三球',active:false},
        ],
        order3_ball:[
            {name:0,num:33,col:'col-6',ball:true},
            {name:1,num:33,col:'col-6',ball:true},
            {name:2,num:33,col:'col-6',ball:true},
            {name:3,num:33,col:'col-6',ball:true},
            {name:4,num:33,col:'col-6',ball:true},
            {name:5,num:33,col:'col-6',ball:true},
            {name:6,num:33,col:'col-6',ball:true},
            {name:7,num:33,col:'col-6',ball:true},
            {name:8,num:33,col:'col-6',ball:true},
            {name:9,num:33,col:'col-6',ball:true},
            {name:'大',num:33,col:'col-6',ball:false},
            {name:'小',num:33,col:'col-6',ball:false},
            {name:'单',num:33,col:'col-6',ball:false},
            {name:'双',num:33,col:'col-6',ball:false},
        ],
        order3_a:[
            {name:'总和大',num:20,col:'col-6',ball:false},
            {name:'总和小',num:20,col:'col-6',ball:false},
            {name:'总和单',num:20,col:'col-6',ball:false},
            {name:'总和双',num:20,col:'col-6',ball:false},
            {name:'豹子',num:20,col:'col-6',ball:false},
            {name:'顺子',num:20,col:'col-6',ball:false},
            {name:'对子',num:20,col:'col-6',ball:false},
            {name:'杂六',num:20,col:'col-6',ball:false},
            {name:'龙',num:20,col:'col-4',ball:false},
            {name:'虎',num:20,col:'col-4',ball:false},
            {name:'和',num:20,col:'col-4',ball:false},
        ]
    },
    methods:{
        menuListSelect:function(){
            $(event.target).parent('.menu-group').toggleClass('active')
            $('.game-list-col').toggleClass('active')
            $('.game-title').text($(event.target).text())
            this.menuListSelectData=$(event.target).data('menu')
        },
        gameListSelect:function(){
            $(event.target).addClass('active').siblings().removeClass('active has-bet');
            this.gameListSelectNum=$(event.target).data('list')
        },
        happy10Toggle:function(index){
            this.happy10_con_menu.filter((v)=>{
                if(v.active){
                    return v.active=false;
                }
            })
            this.happy10_con_menu[index].active=!this.happy10_con_menu[index].active
            this.happy10a=index;
        },
        order3Toggle:function(index){
            this.order3_menu.filter((v)=>{
                if(v.active){
                    return v.active=false;
                }
            })
            this.order3_menu[index].active=!this.order3_menu[index].active
            this.order3=index;
        }
    }
})
$(function(){
    var overTime = 120;
    var openTime = 180;
    var s = 0,
        m = 0;
    var overTimeRun = setInterval(function () {
        overTime -= 1;
        s = overTime % 60;
        m = '0' + Math.floor(overTime / 60);
        if (s < 10) {
            s = '0' + overTime % 60;
        }
        if (overTime == 0) {
            clearInterval(overTimeRun)
        }
        $('.over-time-num').text(m + ':' + s)
    }, 1000)
    var openTimeRun = setInterval(function () {
        openTime -= 1;
        s = openTime % 60;
        m = '0' + Math.floor(openTime / 60);
        if (s < 10) {
            s = '0' + openTime % 60;
        }
        if (openTime == 0) {
            clearInterval(openTimeRun)
        }
        $('.open-time-num').text(m + ':' + s)
    }, 1000)
    $('.btn-cancel').on('click',function(){
        $('.notice-modal-box').addClass('active')
        $('.notice-modal').animate({
            opacity:0
        },300,function(){
            $(this).remove()
        })
    })
})