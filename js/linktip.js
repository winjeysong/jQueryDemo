/**
 * 自定义超链接提示
 * winjeysong
 */

function customLinkTip(ele){
    //由于自制的提示与鼠标距离过近，会造成无法提示，出现闪烁的情况，使用需要使提示块与鼠标位置有一定距离
    let x = 10;
    let y = 20;

    $(ele).mouseover(function(e){
        //去除自带提示
        this.curTitle = this.title;
        this.title = "";

        //当鼠标移入时，创建一个div提示块
        var divTip = "<div id='divTip'>" + this.curTitle + "</div>";
        $("body").append(divTip);
        //设置div块的位置
        $("#divTip").css({
            "top": e.pageY + x + "px",
            "left": e.pageX + y + "px"
        }).show();
    }).mouseout(function(){
        //鼠标移出后将值重新赋值给title，当下次鼠标移入时，就又能使用该值了
        this.title = this.curTitle;
        $("#divTip").remove();
    }).mousemove(function(e){
        //鼠标移动时，提示块也会跟随移动
        $("#divTip").css({
            "top": e.pageY + x + "px",
            "left": e.pageX + y + "px"
        });
    });
}
