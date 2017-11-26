export var autoheight={
    created(){
        this.$nextTick(function(){
            console.log('created')
            var navHeight=$('.navbar').outerHeight();
            var lastHeight=$('.last-open-box').outerHeight();
            var nowHeight=$('.now-open-box').outerHeight();
            var playHeight=$('.play-box').outerHeight()||0;
            var swiperHeight=$('.swiper-wrapper').outerHeight()||0;
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
            var wHeight=$(window).height();
            $('.mainbody-box').height(wHeight-saveHeight+'px')
            $('.menu-group').height(wHeight+'px')
            $('.game-list-menu').height(wHeight-saveHeight+'px')
            console.log(nowHeight)
        })
    }
}