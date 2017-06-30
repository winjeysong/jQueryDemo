var Rolling = {
    //基本参数
    para: {
        cur: 1,
        let: 4
    },

    //向右箭头功能:点击后展示下一版面
    rollingRight: function(){
        let cur = 1;  //初始化当前页数
        let num = 4;  //每个版面的图片数
        $("span.next").click(function(){
            let $wrap = $(this).parents("div.wrap");
            let $content = $wrap.find("div.content");
            let $innerContent = $wrap.find("div.inner_content");
            
            let rollingWidth = $wrap.width();  //一个版面的宽度
            let totalList = $innerContent.find("li").length;  //所有的图片数
            let totalPage = Math.ceil(totalList / num);  //计算有多少版面，向上取整

            if(cur == totalPage){  //如果当前是最后一个版面，则点击后重新跳转到第一个版面
                $innerContent.animate({
                    opacity: 0,
                    left: 0}, 0)
                    .animate({opacity:1},"normal");
                cur = 1;
            }
            else{
                $innerContent.animate({
                    left: "-=" + rollingWidth  //切换版面
                }, "normal");
                cur += 1;
            }

            //圆点提示
        });

        
    },

    
}