/**
 * 用于左右滚动的展示页面，
 * winjeysong
 */
    
//基本参数   
var num = 4;  //每个版面的图片数
var cur = 1;  //初始化当前页数
/*cur作为全局变量的原因：方法dotRolling和rollingRightLeft共用该变量，每次触发click事件都会刷新cur值，这样就不会出现点完最后一个圆点后，再点向右箭头，会出现一段空白内容的情况*/
    
var $wrap = $("span.next").parents("div.wrap");
var $innerContent = $wrap.find("div.inner_content");
            
var rollingWidth = $wrap.width();  //一个版面的宽度
var totalList = $innerContent.find("li").length;  //所有的图片数
var totalPage = Math.ceil(totalList / num);  //计算有多少版面，即有多少圆点，向上取整

var Rolling = {
    //计算圆点的个数，并生成对应个数的圆点
    dotTip: function(appendEle){
        let totalDot = totalPage;
        let i = 0;
        let $append1 = $wrap.find("div.tip").append(appendEle);
        $append1.children().addClass("cur_page");  //给刚加载进入页面后的第一个圆点添加cur_page的高亮样式

        while(i < totalDot - 1){
            $wrap.find("div.tip").append(appendEle);  //添加后续提示圆点
            i++;
        }
    },

    //当前圆点
    curDot: function(curDot){
        $wrap.find("span").eq(curDot - 1)  //选取当前页的圆点
        .addClass("cur_page")  //添加当前页样式
        .siblings().removeClass("cur_page")  //移除同辈样式
    },

      //圆点功能：点击圆点切换版面
    dotRolling: function(){
        $("div.tip > span").click(function(){
            let dotIndex = $(this).index();  //获取所点击的圆点的索引值
            
            if(! $innerContent.is(":animated")){
                $innerContent.animate({left: - rollingWidth * dotIndex});  //控制innercontent的位置
                Rolling.curDot(dotIndex + 1);  //点击后，当前版面的圆点提示
                cur = dotIndex + 1;  //将cur重新赋值为当前所点击的圆点的索引值+1
            }
        });
    },

    //左右箭头功能：点击后展示下一版面或上一版面
    rollingRightLeft: function(){
        //右箭头      
        $("span.next").click(function(){
            if(! $innerContent.is(":animated")){  //如果元素当前不处于动画中，才为它添加动画。防止快速点击鼠标后，即使放开鼠标后，还是继续产生滚动动画的情况发生
                if(cur == totalPage){  //如果当前是最后一个版面，则点击后重新跳转到第一个版面
                    $innerContent.animate({
                        opacity: 0,
                        left: 0}, 0)
                        .animate({opacity: 1},"normal");
                    cur = 1;
                }
                else{
                    $innerContent.animate({
                        left: "-=" + rollingWidth  //切换版面
                    }, "normal");
                    cur += 1;
                }
                Rolling.curDot(cur);  //当前版面的圆点提示
            }
        });  

        //左箭头
        $("span.prev").click(function(){
            if(! $innerContent.is(":animated")){  //如果元素当前不处于动画中，才为它添加动画。防止快速点击鼠标后，即使放开鼠标后，还是继续产生滚动动画的情况发生
                if(cur == 1){  //如果当前是第一个版面，则点击后重新跳转到最后一个版面
                    $innerContent.animate({
                        opacity: 0,
                        left: - rollingWidth * (totalPage - 1)}, 0)
                        .animate({opacity: 1},"normal");
                    cur = totalPage;
                }
                else{
                    $innerContent.animate({
                        left: "+=" + rollingWidth  //切换版面
                    }, "normal");
                    cur -= 1;
                }
                Rolling.curDot(cur);  //当前版面的圆点提示
            }
        });                            
    },
}
