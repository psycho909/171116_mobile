import lotterA0 from '../components/lotter-a0.html'
import lotterA1 from '../components/lotter-a1.html'
import lotterA2 from '../components/lotter-a2.html'
console.log(lotterA1)
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
                var num=$(this).closest('.mainbody-box').data('num');
                $(this).toggleClass('active')
                $('.bet-num').text($('.mainbody .bet.active').length)
                if( $('.game-list').eq(num).hasClass('active') && $('.mainbody .bet.active').length >= 1){
                    $('.game-list').eq(num).addClass('has-bet')
                }else{
                    $('.game-list').eq(num).removeClass('has-bet')
                }
            })
        })
    }
}

Vue.component('lotter-a0',{
    template:lotterA0,
    mixins:[mixinCreated],
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
                    },
                    "group_b":[
                        {
                            title: "第一球",
                            name_a: "大",
                            number_a: 1.982,
                            name_b: "小",
                            number_b: 1.982,
                            name_c: "单",
                            number_c: 1.982,
                            name_d: "双",
                            number_d: 1.982
                        },
                        {
                            title: "第二球",
                            name_a: "大",
                            number_a: 1.982,
                            name_b: "小",
                            number_b: 1.982,
                            name_c: "单",
                            number_c: 1.982,
                            name_d: "双",
                            number_d: 1.982
                        },
                        {
                            title: "第三球",
                            name_a: "大",
                            number_a: 1.982,
                            name_b: "小",
                            number_b: 1.982,
                            name_c: "单",
                            number_c: 1.982,
                            name_d: "双",
                            number_d: 1.982
                        },
                        {
                            title: "第四球",
                            name_a: "大",
                            number_a: 1.982,
                            name_b: "小",
                            number_b: 1.982,
                            name_c: "单",
                            number_c: 1.982,
                            name_d: "双",
                            number_d: 1.982
                        },
                        {
                            title: "第五球",
                            name_a: "大",
                            number_a: 1.982,
                            name_b: "小",
                            number_b: 1.982,
                            name_c: "单",
                            number_c: 1.982,
                            name_d: "双",
                            number_d: 1.982
                        }
                    ]
                }
            ]
        }
    }
})
Vue.component('lotter-a1',{
    template:lotterA1,
    mixins:[mixinCreated],
    props:['name','num']
})
Vue.component('lotter-a2',{
    template:lotterA2,
    mixins:[mixinCreated],
    data(){
        return {
            gameList:[
                {
                    title:'前三',
                    name_a1:'豹子',
                    name_a1_num:70,
                    name_a2:'顺子',
                    name_a2_num:14,
                    name_a3:'对子',
                    name_a3_num:3.2,
                    name_a4:'半顺',
                    name_a4_num:2.3,
                    name_a5:'杂六',
                    name_a5_num:2.8,
                },{
                    title:'中三',
                    name_a1:'豹子',
                    name_a1_num:70,
                    name_a2:'顺子',
                    name_a2_num:14,
                    name_a3:'对子',
                    name_a3_num:3.2,
                    name_a4:'半顺',
                    name_a4_num:2.3,
                    name_a5:'杂六',
                    name_a5_num:2.8,
                },{
                    title:'后三',
                    name_a1:'豹子',
                    name_a1_num:70,
                    name_a2:'顺子',
                    name_a2_num:14,
                    name_a3:'对子',
                    name_a3_num:3.2,
                    name_a4:'半顺',
                    name_a4_num:2.3,
                    name_a5:'杂六',
                    name_a5_num:2.8,
                }
            ]
        }
    }
})
var gameList=[
    {name:'两面',active:true},
    {name:'第一球',active:false},
    {name:'第二球',active:false},
    {name:'第三球',active:false},
    {name:'第四球',active:false},
    {name:'第五球',active:false},
    {name:'前中后',active:false},
]
var app=new Vue({
    el:'#app',
    data:{
        gameList:gameList,
        gameListSelectNum:0
    },
    methods:{
        gameListSelect:function(){
            $(event.target).addClass('active').siblings().removeClass('active has-bet');
            this.gameListSelectNum=$(event.target).data('list')
        }
    }
})
$(function(){
    $('.menu-group li').on('click', function () {
        $(this).parent('.menu-group').toggleClass('active')
        $('.game-list-col').toggleClass('active')
    })
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