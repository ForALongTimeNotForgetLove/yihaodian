var times = null;
var time = 60;
$('.tableText').css('cursor', 'prointer')
$('.tableText').click(a);
function a() {
	times = setInterval(tim, 100)
	$('.tableText').off('click')
}
function tim() {
	//		$('.tableText').off('click');
	--time;
	$('.tableText').text(time + '秒后重新发送');
	if(time <= 0) {
		time=60;
		clearInterval(times);
		$('.tableText').text('获取验证码');
		$('.tableText').on('click',a)
	}

}
//	$('.tableText').on('click')