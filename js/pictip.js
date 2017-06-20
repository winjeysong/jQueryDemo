/**
 * 图片浮出层(在超链接提示的基础上继续修改所得)
 * winjeysong
 */

function detailedPicTip(ele){
    //由于自制的提示与鼠标距离过近，会造成无法提示，出现闪烁的情况，使用需要使提示块与鼠标位置有一定距离
    let x = 10;
    let y = 20;
    //获取窗口的宽度
    let winWidth = $(window).width();
    //获取图片水平方向位置
    //let picLeft = $(this).offset().left;

    $(ele).mouseover(function(e){
        //去除a标签自带的提示
        this.curTitle = this.title;
        this.title = "";
        var imgName = this.curTitle? this.curTitle:"";

        //当鼠标移入时，创建一个div提示块
        var divTip = "<div id='divTip'><img src='" + this.href + "' alt='大图显示' width='900' height='600' />" + "<br/>" + imgName + "</div>";
        $("body").append(divTip);
        //设置div块的位置，并判断浮出层在鼠标移动时是否会超出屏幕
        if(e.pageX + x + 940 <= winWidth){
            $("#divTip").css({
            "top": e.pageY + y + "px",
            "left": e.pageX + x + "px"
            }).show();
        }
        else{  //如果超出屏幕，则固定其水平方向显示位置
            $("#divTip").css({
                "top": e.pageY + y + "px",
                "left": winWidth - 940 + "px"
            }).show();
        }
    
        
    }).mouseout(function(){
        //鼠标移出后将值重新赋值给title，当下次鼠标移入时，就又能使用该值了
        this.title = this.curTitle;
        $("#divTip").remove();
    }).mousemove(function(e){
        //鼠标移动时，提示块也会跟随移动，判断方式同前
        if(e.pageX + x + 940 <= winWidth){
            $("#divTip").css({
            "top": e.pageY + y + "px",
            "left": e.pageX + x + "px"
            });
        }
        else{
            $("#divTip").css({
                "top": e.pageY + y + "px",
                "left": winWidth - 940 + "px"
            });
        }

    });
}
