<template>
    <nav class="navbar navbar-expand-md navbar-dark game-header-bg align-items-center">
		<a href="javascript:;" class="game-title-wrap text-white" @click="showMoreGame">
			<span class="game-title">{{name}}</span>
			<i class="fa fa-angle-right" aria-hidden="true"></i>
		</a>

		<div class="money-total text-white ml-auto mr-3">0.00</div>

		<div class="dropdown game-menu">
			<i class="fa fa-bars text-white" data-toggle="dropdown" aria-hidden="true"></i>
			<div class="dropdown-menu dropdown-menu-right text-center m-0 p-0">
				<a class="dropdown-item" href="#">
					<span>即时注单</span>
					<span class="num">(0.00)</span>
				</a>
                <a class="dropdown-item" href="#">开奖结果</a>
                <a class="dropdown-item" href="#">投注限额</a>
                <a class="dropdown-item" href="#">游戏规则</a>
                <a class="dropdown-item" href="#">两面长龙</a>
                <a class="dropdown-item" href="#">转账</a>
                <a class="dropdown-item" href="#">路珠</a>
                <a class="dropdown-item" href="#">
                    <span>今天输赢</span>
                    <span>(-1191.05)</span>
                </a>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	props:['name'],
	methods:{
		showMoreGame(){
			document.querySelector('.more-game-list').classList.add('show')
			setTimeout(function(){
				document.querySelector('.menu-group').classList.add('show')
			},100)
		}
	}
}
</script>
