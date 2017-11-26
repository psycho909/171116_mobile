<template>
    <div class="game-wrap">
        <Navbar name='上海时时乐'></Navbar>
        <Lastlottery></Lastlottery>
        <Nowlottery ref="nowLottery"></Nowlottery>
        <div class="content-wrap container-fluid">
            <div class="row">
                <Gamelist :gameName="list" @gameListSelect="getGameName"></Gamelist>
                <div class="col swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" :class="{active:list.active}" v-for="(list,index) in order3_menu" @click="order3Toggle" :data-game="list.game_name">{{list.name}}</div>
                    </div>

                    <Lotter :game="order3_balla" v-if="game_name == 'order3_balla'"></Lotter>
                    <Lotter :game="order3_ballb" v-if="game_name == 'order3_ballb'"></Lotter>
                    <Lotter :game="order3_ballc" v-if="game_name == 'order3_ballc'"></Lotter>
                </div>
            </div>
        </div>
        <Playbox></Playbox>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Lastlottery from './LastLottery.vue'
import Nowlottery from './NowLottery.vue'
import Lotter from './Lotter.vue'
import Gamelist from './Gamelist.vue'
import Playbox from './Playbox.vue'
import {autoheight} from './mixins/autoheight';

export default {
    components:{
        Navbar,
        Lastlottery,
        Nowlottery,
        Lotter,
        Gamelist,
        Playbox
    },
    mixins:[autoheight],
    props:['name'],
    created(){
        console.log('created')
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView:3,
                spaceBetween: 2
            });
        })
    },
    mounted:function(){
        console.log('mounted')
    },
    updated() {
        console.log('updated')
        this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView:3,
                spaceBetween: 2
            });
        })
    },
    methods:{
        getGameName(name){
            this.get_name=name;
        },
        order3Toggle(){
            this.game_name=event.currentTarget.dataset.game;
            $(event.currentTarget).addClass('active').siblings().removeClass('active')
        },
    },
    data(){
        return {
            get_name:'order3_ball',
            game_name:'order3_balla',
            list:[
                {name:'整合',active:true,game:'order3_ball'}
            ],
            order3_menu:[
                {name:'第一球',active:true,game_name:'order3_balla'},
                {name:'第二球',active:false,game_name:'order3_ballb'},
                {name:'第三球',active:false,game_name:'order3_ballc'},
            ],
            order3_balla:[
                {title:false,name:0,num:33,col:'col-6',ball:true},
                {title:false,name:1,num:33,col:'col-6',ball:true},
                {title:false,name:2,num:33,col:'col-6',ball:true},
                {title:false,name:3,num:33,col:'col-6',ball:true},
                {title:false,name:4,num:33,col:'col-6',ball:true},
                {title:false,name:5,num:33,col:'col-6',ball:true},
                {title:false,name:6,num:33,col:'col-6',ball:true},
                {title:false,name:7,num:33,col:'col-6',ball:true},
                {title:false,name:8,num:33,col:'col-6',ball:true},
                {title:false,name:9,num:33,col:'col-6',ball:true},
                {title:false,name:'大',num:33,col:'col-6',ball:false},
                {title:false,name:'小',num:33,col:'col-6',ball:false},
                {title:false,name:'单',num:33,col:'col-6',ball:false},
                {title:false,name:'双',num:33,col:'col-6',ball:false},
                {title:false,name:'总和大',num:20,col:'col-6',ball:false},
                {title:false,name:'总和小',num:20,col:'col-6',ball:false},
                {title:false,name:'总和单',num:20,col:'col-6',ball:false},
                {title:false,name:'总和双',num:20,col:'col-6',ball:false},
                {title:false,name:'豹子',num:20,col:'col-6',ball:false},
                {title:false,name:'顺子',num:20,col:'col-6',ball:false},
                {title:false,name:'对子',num:20,col:'col-6',ball:false},
                {title:false,name:'杂六',num:20,col:'col-6',ball:false},
                {title:false,name:'龙',num:20,col:'col-4',ball:false},
                {title:false,name:'虎',num:20,col:'col-4',ball:false},
                {title:false,name:'和',num:20,col:'col-4',ball:false},
            ],
            order3_ballb:[
                {title:false,name:1,num:33,col:'col-6',ball:true},
                {title:false,name:1,num:33,col:'col-6',ball:true},
                {title:false,name:2,num:33,col:'col-6',ball:true},
                {title:false,name:3,num:33,col:'col-6',ball:true},
                {title:false,name:4,num:33,col:'col-6',ball:true},
                {title:false,name:5,num:33,col:'col-6',ball:true},
                {title:false,name:6,num:33,col:'col-6',ball:true},
                {title:false,name:7,num:33,col:'col-6',ball:true},
                {title:false,name:8,num:33,col:'col-6',ball:true},
                {title:false,name:9,num:33,col:'col-6',ball:true},
                {title:false,name:'大',num:33,col:'col-6',ball:false},
                {title:false,name:'小',num:33,col:'col-6',ball:false},
                {title:false,name:'单',num:33,col:'col-6',ball:false},
                {title:false,name:'双',num:33,col:'col-6',ball:false},
                {title:false,name:'总和大',num:20,col:'col-6',ball:false},
                {title:false,name:'总和小',num:20,col:'col-6',ball:false},
                {title:false,name:'总和单',num:20,col:'col-6',ball:false},
                {title:false,name:'总和双',num:20,col:'col-6',ball:false},
                {title:false,name:'豹子',num:20,col:'col-6',ball:false},
                {title:false,name:'顺子',num:20,col:'col-6',ball:false},
                {title:false,name:'对子',num:20,col:'col-6',ball:false},
                {title:false,name:'杂六',num:20,col:'col-6',ball:false},
                {title:false,name:'龙',num:20,col:'col-4',ball:false},
                {title:false,name:'虎',num:20,col:'col-4',ball:false},
                {title:false,name:'和',num:20,col:'col-4',ball:false},
            ],
            order3_ballc:[
                {title:false,name:2,num:33,col:'col-6',ball:true},
                {title:false,name:1,num:33,col:'col-6',ball:true},
                {title:false,name:2,num:33,col:'col-6',ball:true},
                {title:false,name:3,num:33,col:'col-6',ball:true},
                {title:false,name:4,num:33,col:'col-6',ball:true},
                {title:false,name:5,num:33,col:'col-6',ball:true},
                {title:false,name:6,num:33,col:'col-6',ball:true},
                {title:false,name:7,num:33,col:'col-6',ball:true},
                {title:false,name:8,num:33,col:'col-6',ball:true},
                {title:false,name:9,num:33,col:'col-6',ball:true},
                {title:false,name:'大',num:33,col:'col-6',ball:false},
                {title:false,name:'小',num:33,col:'col-6',ball:false},
                {title:false,name:'单',num:33,col:'col-6',ball:false},
                {title:false,name:'双',num:33,col:'col-6',ball:false},
                {title:false,name:'总和大',num:20,col:'col-6',ball:false},
                {title:false,name:'总和小',num:20,col:'col-6',ball:false},
                {title:false,name:'总和单',num:20,col:'col-6',ball:false},
                {title:false,name:'总和双',num:20,col:'col-6',ball:false},
                {title:false,name:'豹子',num:20,col:'col-6',ball:false},
                {title:false,name:'顺子',num:20,col:'col-6',ball:false},
                {title:false,name:'对子',num:20,col:'col-6',ball:false},
                {title:false,name:'杂六',num:20,col:'col-6',ball:false},
                {title:false,name:'龙',num:20,col:'col-4',ball:false},
                {title:false,name:'虎',num:20,col:'col-4',ball:false},
                {title:false,name:'和',num:20,col:'col-4',ball:false},
            ],
        }
    },
};
</script>
