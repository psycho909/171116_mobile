<template>
        <div :clas='[bets.col]' class="mainbody-title text-white text-censter py-2" v-if="bets.title">
            <span class="bet-content mr-1">{{bets.name}}</span>
            <slot name="bets-number"></slot>
        </div>
        <div class="bet" :class='[bets.col,{active:isActive}]' v-else>
            <span class="bet-content" :class="[{ball:bets.ball},bets.circle?bets.circle+(i+1):'',bets.circle?bets.circle:'']">{{bets.name}}</span>
            <span class="bet-item" v-if="typeof bets.num == 'number'">{{bets.num}}</span>
        </div>
</template>
<script>
import {autoheight} from './mixins/autoheight';
export default {
    name:'lotter-border',
    mixins:[autoheight],
    props:['bets','i'],
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        bet_active:function(){
            this.isActive=!this.isActive;
            var _self=this;
            this.$emit('bet_active',_self.isActive)
        }
    }
}
</script>

