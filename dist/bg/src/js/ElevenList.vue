<template>
    <div class="game-wrap">
        <Navbar name='广东11选5'></Navbar>
        <Lastlottery></Lastlottery>
        <Nowlottery ref="nowLottery"></Nowlottery>
        <div class="content-wrap container-fluid">
            <div class="row">
                <Gamelist :gameName="list" @gameListSelect="getGameName"></Gamelist>
                <Lotter :game="eleven_a" v-if="get_name == 'eleven_a'"></Lotter>
                <Lotter :game="eleven_baa" v-if="get_name == 'eleven_baa'"></Lotter>
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
            get_name:'eleven_a',
            list:[
                {name:'整合',active:true,game:'eleven_a'},
                {name:'前中後',active:false,game:'eleven_baa'},
            ],
            eleven_a:[
                {title:true,name:'总和、龙虎',num:false,col:'col-12',ball:false},
                {title:false,name:'总和大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'总和小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'总和单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'总和双',num:20.6,col:'col-6',ball:false},
                {title:false,name:'总和龙',num:20.6,col:'col-6',ball:false},
                {title:false,name:'总和虎',num:20.6,col:'col-6',ball:false},
                {title:true,name:'第一球',num:20.6,col:'col-12',ball:true},
                {title:false,name:1,num:20.6,col:'col-4',ball:true},
                {title:false,name:2,num:20.6,col:'col-4',ball:true},
                {title:false,name:3,num:20.6,col:'col-4',ball:true},
                {title:false,name:4,num:20.6,col:'col-4',ball:true},
                {title:false,name:5,num:20.6,col:'col-4',ball:true},
                {title:false,name:6,num:20.6,col:'col-4',ball:true},
                {title:false,name:7,num:20.6,col:'col-4',ball:true},
                {title:false,name:8,num:20.6,col:'col-4',ball:true},
                {title:false,name:9,num:20.6,col:'col-4',ball:true},
                {title:false,name:10,num:20.6,col:'col-6',ball:true},
                {title:false,name:11,num:20.6,col:'col-6',ball:true},
                {title:false,name:'大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'双',num:20.6,col:'col-6',ball:false},
                {title:true,name:'第二球',num:20.6,col:'col-12',ball:true},
                {title:false,name:1,num:20.6,col:'col-4',ball:true},
                {title:false,name:2,num:20.6,col:'col-4',ball:true},
                {title:false,name:3,num:20.6,col:'col-4',ball:true},
                {title:false,name:4,num:20.6,col:'col-4',ball:true},
                {title:false,name:5,num:20.6,col:'col-4',ball:true},
                {title:false,name:6,num:20.6,col:'col-4',ball:true},
                {title:false,name:7,num:20.6,col:'col-4',ball:true},
                {title:false,name:8,num:20.6,col:'col-4',ball:true},
                {title:false,name:9,num:20.6,col:'col-4',ball:true},
                {title:false,name:10,num:20.6,col:'col-6',ball:true},
                {title:false,name:11,num:20.6,col:'col-6',ball:true},
                {title:false,name:'大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'双',num:20.6,col:'col-6',ball:false},
                {title:true,name:'第三球',num:20.6,col:'col-12',ball:true},
                {title:false,name:1,num:20.6,col:'col-4',ball:true},
                {title:false,name:2,num:20.6,col:'col-4',ball:true},
                {title:false,name:3,num:20.6,col:'col-4',ball:true},
                {title:false,name:4,num:20.6,col:'col-4',ball:true},
                {title:false,name:5,num:20.6,col:'col-4',ball:true},
                {title:false,name:6,num:20.6,col:'col-4',ball:true},
                {title:false,name:7,num:20.6,col:'col-4',ball:true},
                {title:false,name:8,num:20.6,col:'col-4',ball:true},
                {title:false,name:9,num:20.6,col:'col-4',ball:true},
                {title:false,name:10,num:20.6,col:'col-6',ball:true},
                {title:false,name:11,num:20.6,col:'col-6',ball:true},
                {title:false,name:'大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'双',num:20.6,col:'col-6',ball:false},
                {title:true,name:'第四球',num:20.6,col:'col-12',ball:true},
                {title:false,name:1,num:20.6,col:'col-4',ball:true},
                {title:false,name:2,num:20.6,col:'col-4',ball:true},
                {title:false,name:3,num:20.6,col:'col-4',ball:true},
                {title:false,name:4,num:20.6,col:'col-4',ball:true},
                {title:false,name:5,num:20.6,col:'col-4',ball:true},
                {title:false,name:6,num:20.6,col:'col-4',ball:true},
                {title:false,name:7,num:20.6,col:'col-4',ball:true},
                {title:false,name:8,num:20.6,col:'col-4',ball:true},
                {title:false,name:9,num:20.6,col:'col-4',ball:true},
                {title:false,name:10,num:20.6,col:'col-6',ball:true},
                {title:false,name:11,num:20.6,col:'col-6',ball:true},
                {title:false,name:'大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'双',num:20.6,col:'col-6',ball:false},
                {title:true,name:'第五球',num:20.6,col:'col-12',ball:true},
                {title:false,name:1,num:20.6,col:'col-4',ball:true},
                {title:false,name:2,num:20.6,col:'col-4',ball:true},
                {title:false,name:3,num:20.6,col:'col-4',ball:true},
                {title:false,name:4,num:20.6,col:'col-4',ball:true},
                {title:false,name:5,num:20.6,col:'col-4',ball:true},
                {title:false,name:6,num:20.6,col:'col-4',ball:true},
                {title:false,name:7,num:20.6,col:'col-4',ball:true},
                {title:false,name:8,num:20.6,col:'col-4',ball:true},
                {title:false,name:9,num:20.6,col:'col-4',ball:true},
                {title:false,name:10,num:20.6,col:'col-6',ball:true},
                {title:false,name:11,num:20.6,col:'col-6',ball:true},
                {title:false,name:'大',num:20.6,col:'col-6',ball:false},
                {title:false,name:'小',num:20.6,col:'col-6',ball:false},
                {title:false,name:'单',num:20.6,col:'col-6',ball:false},
                {title:false,name:'双',num:20.6,col:'col-6',ball:false},
            ],
            eleven_baa:[
                {title:true,name:'前三',num:false,col:'col-12',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
                {title:true,name:'中三',num:false,col:'col-12',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
                {title:true,name:'后三',num:false,col:'col-12',ball:false},
                {title:false,name:'順子',num:70,col:'col-6',ball:false},
                {title:false,name:'杂六',num:70,col:'col-6',ball:false},
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
            ],
        }
    },
};
</script>
