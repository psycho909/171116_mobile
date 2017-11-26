<template>
    <div class="game-wrap">
        <Navbar name='重庆时时彩'></Navbar>
        <Lastlottery></Lastlottery>
        <Nowlottery ref="nowLottery"></Nowlottery>
        <div class="content-wrap container-fluid">
            <div class="row">
                <Gamelist :gameName="list" @gameListSelect="getGameName"></Gamelist>
                <Lotter :game="lotter_a" v-if="get_name == 'lotter_a'"></Lotter>
                <Lotter :game="nunu" v-if="get_name == 'nunu'"></Lotter>
                <Lotter :game="lotter_baa" v-if="get_name == 'lotter_baa'"></Lotter>
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
    methods:{
        getGameName(name){
            this.get_name=name;
        },
    },
    data(){
        return {
            get_name:'lotter_a',
            list:[
                {name:'整合',active:true,game:'lotter_a'},
                {name:'牛牛 梭哈',active:false,game:'nunu'},
                {name:'前中后',active:false,game:'lotter_baa'},
            ],lotter_a:[
                {title:true,name:'总合、龙与虎',num:false,col:'col-12',ball:false},
                {title:false,name:'总合大',num:1.982,col:'col-6',ball:false},
                {title:false,name:'总合小',num:1.982,col:'col-6',ball:false},
                {title:false,name:'总合单',num:1.982,col:'col-6',ball:false},
                {title:false,name:'总合双',num:1.982,col:'col-6',ball:false},
                {title:false,name:'龙',num:1.982,col:'col-4',ball:false},
                {title:false,name:'虎',num:1.982,col:'col-4',ball:false},
                {title:false,name:'和',num:1.982,col:'col-4',ball:false},
                {title:true,name:'第一球',num:false,col:'col-12',ball:false},
                {title:false,name:'0',num:9.85,col:'col-6',ball:true},
                {title:false,name:'1',num:9.85,col:'col-6',ball:true},
                {title:false,name:'2',num:9.85,col:'col-6',ball:true},
                {title:false,name:'3',num:9.85,col:'col-6',ball:true},
                {title:false,name:'4',num:9.85,col:'col-6',ball:true},
                {title:false,name:'5',num:9.85,col:'col-6',ball:true},
                {title:false,name:'6',num:9.85,col:'col-6',ball:true},
                {title:false,name:'7',num:9.85,col:'col-6',ball:true},
                {title:false,name:'8',num:9.85,col:'col-6',ball:true},
                {title:false,name:'9',num:9.85,col:'col-6',ball:true},
                {title:false,name:'大',num:9.85,col:'col-6',ball:false},
                {title:false,name:'小',num:9.85,col:'col-6',ball:false},
                {title:false,name:'單',num:9.85,col:'col-6',ball:false},
                {title:false,name:'雙',num:9.85,col:'col-6',ball:false},
                {title:true,name:'第二球',num:false,col:'col-12',ball:false},
                {title:false,name:'0',num:9.85,col:'col-6',ball:true},
                {title:false,name:'1',num:9.85,col:'col-6',ball:true},
                {title:false,name:'2',num:9.85,col:'col-6',ball:true},
                {title:false,name:'3',num:9.85,col:'col-6',ball:true},
                {title:false,name:'4',num:9.85,col:'col-6',ball:true},
                {title:false,name:'5',num:9.85,col:'col-6',ball:true},
                {title:false,name:'6',num:9.85,col:'col-6',ball:true},
                {title:false,name:'7',num:9.85,col:'col-6',ball:true},
                {title:false,name:'8',num:9.85,col:'col-6',ball:true},
                {title:false,name:'9',num:9.85,col:'col-6',ball:true},
                {title:false,name:'大',num:9.85,col:'col-6',ball:false},
                {title:false,name:'小',num:9.85,col:'col-6',ball:false},
                {title:false,name:'單',num:9.85,col:'col-6',ball:false},
                {title:false,name:'雙',num:9.85,col:'col-6',ball:false},
                {title:true,name:'第三球',num:false,col:'col-12',ball:false},
                {title:false,name:'0',num:9.85,col:'col-6',ball:true},
                {title:false,name:'1',num:9.85,col:'col-6',ball:true},
                {title:false,name:'2',num:9.85,col:'col-6',ball:true},
                {title:false,name:'3',num:9.85,col:'col-6',ball:true},
                {title:false,name:'4',num:9.85,col:'col-6',ball:true},
                {title:false,name:'5',num:9.85,col:'col-6',ball:true},
                {title:false,name:'6',num:9.85,col:'col-6',ball:true},
                {title:false,name:'7',num:9.85,col:'col-6',ball:true},
                {title:false,name:'8',num:9.85,col:'col-6',ball:true},
                {title:false,name:'9',num:9.85,col:'col-6',ball:true},
                {title:false,name:'大',num:9.85,col:'col-6',ball:false},
                {title:false,name:'小',num:9.85,col:'col-6',ball:false},
                {title:false,name:'單',num:9.85,col:'col-6',ball:false},
                {title:false,name:'雙',num:9.85,col:'col-6',ball:false},
                {title:true,name:'第四球',num:false,col:'col-12',ball:false},
                {title:false,name:'0',num:9.85,col:'col-6',ball:true},
                {title:false,name:'1',num:9.85,col:'col-6',ball:true},
                {title:false,name:'2',num:9.85,col:'col-6',ball:true},
                {title:false,name:'3',num:9.85,col:'col-6',ball:true},
                {title:false,name:'4',num:9.85,col:'col-6',ball:true},
                {title:false,name:'5',num:9.85,col:'col-6',ball:true},
                {title:false,name:'6',num:9.85,col:'col-6',ball:true},
                {title:false,name:'7',num:9.85,col:'col-6',ball:true},
                {title:false,name:'8',num:9.85,col:'col-6',ball:true},
                {title:false,name:'9',num:9.85,col:'col-6',ball:true},
                {title:false,name:'大',num:9.85,col:'col-6',ball:false},
                {title:false,name:'小',num:9.85,col:'col-6',ball:false},
                {title:false,name:'單',num:9.85,col:'col-6',ball:false},
                {title:false,name:'雙',num:9.85,col:'col-6',ball:false},
                {title:true,name:'第五球',num:false,col:'col-12',ball:false},
                {title:false,name:'0',num:9.85,col:'col-6',ball:true},
                {title:false,name:'1',num:9.85,col:'col-6',ball:true},
                {title:false,name:'2',num:9.85,col:'col-6',ball:true},
                {title:false,name:'3',num:9.85,col:'col-6',ball:true},
                {title:false,name:'4',num:9.85,col:'col-6',ball:true},
                {title:false,name:'5',num:9.85,col:'col-6',ball:true},
                {title:false,name:'6',num:9.85,col:'col-6',ball:true},
                {title:false,name:'7',num:9.85,col:'col-6',ball:true},
                {title:false,name:'8',num:9.85,col:'col-6',ball:true},
                {title:false,name:'9',num:9.85,col:'col-6',ball:true},
                {title:false,name:'大',num:9.85,col:'col-6',ball:false},
                {title:false,name:'小',num:9.85,col:'col-6',ball:false},
                {title:false,name:'單',num:9.85,col:'col-6',ball:false},
                {title:false,name:'雙',num:9.85,col:'col-6',ball:false},
            ],
            nunu:[
                {title:true,name:'牛牛',num:false,col:'col-12',ball:false},
                {title:false,name:'牛1',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛2',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛3',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛4',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛5',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛6',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛7',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛8',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛9',num:94.8,col:'col-4',ball:false},
                {title:false,name:'無牛',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛牛',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛大',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛單',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛雙',num:94.8,col:'col-4',ball:false},
                {title:false,name:'牛小',num:94.8,col:'col-4',ball:false},
                {title:true,name:'梭哈',num:94.8,col:'col-12',ball:false},
                {title:false,name:'四條',num:94.8,col:'col-6',ball:false},
                {title:false,name:'三條',num:94.8,col:'col-6',ball:false},
                {title:false,name:'葫蘆',num:94.8,col:'col-6',ball:false},
                {title:false,name:'順子',num:94.8,col:'col-6',ball:false},
                {title:false,name:'兩對',num:94.8,col:'col-6',ball:false},
                {title:false,name:'一對',num:94.8,col:'col-6',ball:false},
                {title:false,name:'散號',num:94.8,col:'col-12',ball:false}
            ],
            lotter_baa:[
                {title:true,name:'前三',num:false,col:'col-12',ball:false},
                {title:false,name:'豹子',num:70,col:'col-6',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'對子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
                {title:false,name:'半順',num:70,col:'col-12',ball:false},
                {title:true,name:'中三',num:false,col:'col-12',ball:false},
                {title:false,name:'豹子',num:70,col:'col-6',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'對子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
                {title:false,name:'半順',num:70,col:'col-12',ball:false},
                {title:true,name:'後三',num:false,col:'col-12',ball:false},
                {title:false,name:'豹子',num:70,col:'col-6',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'對子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
                {title:false,name:'半順',num:70,col:'col-12',ball:false},
                
                
            ]
        }
    },
};
</script>
