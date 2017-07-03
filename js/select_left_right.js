 var SelectOption = {
    //一侧选中添加到另一侧
    appendToOtherSide: function(box, ele1, ele2){
        $(box).click(function(){
            $(ele1 + " option:selected").appendTo(ele2);  //将被选中的元素从一侧移出，并添加到另一侧，只需要一个appendTo方法（或append方法）
        });
    },

    //一侧的全部选中添加到另一侧
    appendAllToOtherSide: function(box, ele1, ele2){
        $(box).click(function(){
            $(ele1 + " option").appendTo(ele2);  //将被选中的元素从一侧移出，并添加到另一侧，只需要一个appendTo方法（或append方法）
        });
    },

    //双击后直接添加到另一侧
    dblclickToOtherSide: function(ele1, ele2){
        $(ele1).dblclick(function(){
            $(ele1 + " option:selected").appendTo(ele2);
        });
    }
}