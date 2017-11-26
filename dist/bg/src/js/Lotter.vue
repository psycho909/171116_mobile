<template>
    <div class="col mainbody-box">
        <div class="row mainbody">
            <template v-for="bets in game">
                <div :class='[bets.col]' class="mainbody-title text-white text-censter py-2" v-if="bets.title">
                    <span class="bet-content mr-1">{{bets.name}}</span>
                    <span class="bet-item" slot="bets-number" v-if="typeof bets.num == 'number'">{{bets.num}}</span>
                </div>
                <div class="bet" :class='[bets.col,{active:isActive}]' @click="bet_active()" v-else>
                    <span class="bet-content" :class="[{ball:bets.ball},bets.circle?bets.circle+(i+1):'',bets.circle?bets.circle:'']">{{bets.name}}</span>
                    <span class="bet-item" v-if="typeof bets.num == 'number'">{{bets.num}}</span>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    
    export default {
        props:['game','title'],
        data(){
            return {
                isActive:false
            }
        },
        methods:{
            bet_active:function(){
                event.currentTarget.classList.toggle('active')
                var _self=this;
                this.$emit('bet_active',_self.isActive)
            }
        }

    }
</script>
