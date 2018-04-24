$(function(){
    //菜单点击

    var demo=$("#form").Validform({
        btnSubmit:".submit", 
        tiptype:3,
		callback:function(data){

		    if(demo.check()==false) {
		        return false;
		    }
			
			//返回数据data是json对象，{"info":"demo info","status":"y"}
			//info: 输出提示信息;
			//status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
			//你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
			//ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；
	 
			//这里执行回调操作;
			//注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
		}

    });
    
    demo.tipmsg.r=" ";



});





// $.Tipmsg={//默认提示文字;
// tit:"提示信息",
// w:{
//     "*":"不能为空！",
//     "*6-16":"请填写6到16位任意字符！",
//     "n":"请填写数字！",
//     "n6-16":"请填写6到16位数字！",
//     "s":"不能输入特殊字符！",
//     "s6-18":"请填写6到18位字符！",
//     "p":"请填写邮政编码！",
//     "m":"请填写手机号码！",
//     "e":"邮箱地址格式不对！",
//     "url":"请填写网址！"
// },
// def:"请填写正确信息！",
// undef:"datatype未定义！",
// reck:"两次输入的内容不一致！",
// r:"通过信息",
// c:"正在检测信息…",
// s:"请{填写|选择}{0|信息}！",
// v:"所填信息没有经过验证，请稍后…",
// p:"正在提交数据…"
// };