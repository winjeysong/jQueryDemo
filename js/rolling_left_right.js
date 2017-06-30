/**
 * 用于左右滚动的展示页面，其中提示圆点可以改成其他图片
 * winjeysong
 */
    
//基本参数   
var num = 4;  //每个版面的图片数
    
var $wrap = $("span.next").parents("div.wrap");
var $innerContent = $wrap.find("div.inner_content");
            
var rollingWidth = $wrap.width();  //一个版面的宽度
var totalList = $innerContent.find("li").length;  //所有的图片数
var totalPage = Math.ceil(totalList / num);  //计算有多少版面，即有多少圆点，向上取整

var Rolling = {
    //计算提示圆点的个数，并生成对应个数的圆点
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

    //向右箭头功能:点击后展示下一版面
    rollingRight: function(){
        let cur = 1;  //初始化当前页数           
        $("span.next").click(function(){
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
            $wrap.find("span").eq(cur - 1)  //选取当前页的圆点
            .addClass("cur_page")  //添加当前页样式
            .siblings().removeClass("cur_page")  //移除同辈样式
        });            
    },        
}
