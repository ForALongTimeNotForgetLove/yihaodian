//更多合作网站
$('.loadMore').css('cursor', 'pointer')
$('.loadMore').on('click', function() {
	$('.typeWeb').toggle()
})
//自动登录
if(mycookie.getCookie('check') == 'true') {
	$('.userHead').next('input').val(mycookie.getCookie('userName'));
	$('.userLock').next('input').val(mycookie.getCookie('password'));
	$('.loadGiet').prop('checked',mycookie.getCookie('check'))
}
$('.tableBtn').on('click', function() {
	if($('.loadGiet').prop('checked')) {
		mycookie.setCookie('userName', $('.userHead').next('input').val(), 7);
		mycookie.setCookie('password', $('.userLock').next('input').val(), 7);
		mycookie.setCookie('check', $('.loadGiet').prop('checked'), 7);
	} else {
		mycookie.removeCookie('userName');
		mycookie.removeCookie('password');
		mycookie.removeCookie('check');
	}
})