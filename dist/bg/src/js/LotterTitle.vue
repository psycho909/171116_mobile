<template>
    <div class="col-12">
        <div class="mainbody-title text-white text-center py-2">
            <span class="bet-content mr-1">{{title}}</span>
            <slot name="bets-number"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'lotter-title',
    props:['title']
}
</script>

