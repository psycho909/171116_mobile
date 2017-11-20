import lotterA0 from '../components/lotter-a0.html'
import lotterA0Child from '../components/lotter-a0-child.html'
import lotterA1NuNu from '../components/lotter-a1nunu.html'
import lotterA2 from '../components/bef-and-af.html'
console.log(123)
var mixinCreated={
    created(){
        this.$nextTick(function(){
            var navHeight=$('.navbar').outerHeight();
            var lastHeight=$('.last-open-box').outerHeight();
            var nowHeight=$('.now-open-box').outerHeight();
            var playHeight=$('.play-box').outerHeight();
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight;
            var wHeight=$(window).height();
            $('.mainbody-box').height(wHeight-saveHeight+'px')
            $('.menu-group').height(wHeight-saveHeight+'px')
            $('.game-list-menu').height(wHeight-saveHeight+'px')
            $('.mainbody .bet').on('click', function () {
                var num=Number($(this).closest('.mainbody-box').attr('data-num'));
                $(this).toggleClass('active')
                $('.bet-num').text($('.mainbody .bet.active').length)
                if( $('.game-list').eq(num).hasClass('active') && $('.mainbody .bet.active').length >= 1){
                    $('.game-list').eq(num).addClass('has-bet')
                }else if($('.mainbody .bet.active').length == 0){
                    $('.game-list').eq(num).removeClass('has-bet')
                }
            })
        })
    }
}

Vue.component('lotter-a0',{
    template:lotterA0,
    mixins:[mixinCreated],
    props:['num'],
    data(){
        return {
            game_group:[
                {
                    "group_a":{
                        title: "总和、龙虎",
                        name_a: "总合大",
                        number_a: 1.982,
                        name_b: "总合小",
                        number_b: 1.982,
                        name_c: "总合单",
                        number_c: 1.982,
                        name_d: "总合双",
                        number_d: 1.982,
                        name_e: "龙",
                        number_e: 1.982,
                        name_f: "虎",
                        number_f: 1.982,
                        name_g: "和",
                        number_g: 9.4
                    }
                }
            ]
        }
    },
    methods:{
        betClick:function(){
            console.log(this.$refs)
        }
    }
})
Vue.component('lotter-a0-child',{
    template:lotterA0Child,
    mixins:[mixinCreated],
    props:['name']
})
Vue.component('lotter-a1nunu',{
    template:lotterA1NuNu,
    mixins:[mixinCreated],
    props:['title','num'],
    data(){
        return {
            nunu:[
                {name:'牛1',num:94.8},
                {name:'牛2',num:94.8},
                {name:'牛3',num:94.8},
                {name:'牛4',num:94.8},
                {name:'牛5',num:94.8},
                {name:'牛6',num:94.8},
                {name:'牛7',num:94.8},
                {name:'牛8',num:94.8},
                {name:'牛9',num:94.8},
                {name:'無牛',num:94.8},
                {name:'牛牛',num:94.8},
                {name:'牛大',num:94.8},
                {name:'牛單',num:94.8},
                {name:'牛雙',num:94.8},
                {name:'牛小',num:94.8},
            ],
            suoha:[
                {name:'四條',num:94.8},
                {name:'三條',num:94.8},
                {name:'葫蘆',num:94.8},
                {name:'順子',num:94.8},
                {name:'兩對',num:94.8},
                {name:'一對',num:94.8},
                {name:'散號',num:94.8}
            ],
        }
    }
})
Vue.component('lotter-a2',{
    template:lotterA2,
    props:['title']
})
var menuList=[
    {name:'重慶時時彩',data:'lottera'},
    {name:'天津時時彩',data:'lotterb'},
    {name:'廣東快樂十分',data:'happy10mina'},
    {name:'廣西快樂十分',data:'happy10minb'},
    {name:'天津快樂十分',data:'happy10minc'},
    {name:'重慶快樂十分',data:'happy10mind'},
    {name:'北京賽車PK10',data:'pk10'},
    {name:'幸運飛艇',data:'lukyAirShip'},
    {name:'廣東11選5',data:'11select5'},
    {name:'排列三',data:'order3'},
    {name:'福彩3D',data:'3d'},
    {name:'上海時時樂',data:'shanghai'}
]
var lotteraList=[
    {name:'整合',active:true},
    {name:'牛牛 梭哈',active:false},
    {name:'前中後',active:false},
]
var lotterbList=[
    {name:'整合',active:true},
    {name:'牛牛 梭哈',active:false},
    {name:'前中後',active:false},
]
var happy10mina=[
    {name:'整合',active:true},
    {name:'連碼',active:false},
]
var happy10minb=[
    {name:'整合',active:true},
    {name:'連碼',active:false},
]
var happy10minc=[
    {name:'整合',active:true},
    {name:'連碼',active:false},
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
    data:{
        menuList:menuList,
        lotteraList:lotteraList,
        lotterbList:lotterbList,
        menuListSelectData:'lottera',
        gameListSelectNum:0,
        bet_length:0
    },
    methods:{
        menuListSelect:function(){
            $(event.target).parent('.menu-group').toggleClass('active')
            $('.game-list-col').toggleClass('active')
            $('.game-title').text($(event.target).text())
            this.menuListSelectData=$(event.target).data('menu')
            console.log(this.menuListSelectData)
        },
        gameListSelect:function(){
            $(event.target).addClass('active').siblings().removeClass('active has-bet');
            this.gameListSelectNum=$(event.target).data('list')
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