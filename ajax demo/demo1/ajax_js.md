# 用纯js的方法来完成ajax
1. 需要考虑到浏览器的兼容性问题（IE5、IE6不支持直接引入`XMLHttpRequest`对象，需要使用`ActiveXObject`）
2. open()
3. 需要通过`onreadystatechange`属性为`XMLHttpRequest`对象注册一个**回调事件处理器**，当`readyState`值改变时，该事件就会被激发
4. send()
5. 当请求改变时，`XMLHttpRequest`对象就会调用已注册的**回调事件处理器**，检查`readyState`值和`HTTP`状态
6. `readyState`值为4且`HTTP`状态为200时，就可以继续调用函数并执行相应操作