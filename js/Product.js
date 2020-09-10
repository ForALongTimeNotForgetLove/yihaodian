//物品分类
$('#choice1').find('li').on('click', function() {
	$('#choice1').find('li').removeClass('checked');
	$(this).toggleClass('checked');
})
$('#choice2').find('li').on('click', function() {
	$('#choice2').find('li').removeClass('checked');
	$(this).toggleClass('checked');
})
//推荐搭配
var li = $('.des_border').find('.price');
var num = 0;
var item = {
	list: []
};
li.each(function(index, iten) {
	var lis = $(this);
	var check = lis.find('.checkbox').children('input').prop('checked');
	var pri = lis.last('span').text().replace(/[^\d]/ig, '') - 0;
	item.list.push({
		check: check,
		pri: pri
	})
})
$.each(item.list, function(index, it) {
	if(it.check == true) {
		num += it.pri;
	}
});
var inpu = $('.sum_ipt').val();
num = num * inpu;
$('.team_sum').find('span').text(num)
$('.checkbox>input').on('click', function() {
	var inp = $('.sum_ipt').val();
	num = 0;
	var item = {list: []};
	li.each(function(index,iten){
		var lis = $(this);
		var check = lis.find('.checkbox').children('input').prop('checked');
		var pri = lis.last('span').text().replace(/[^\d]/ig, '') - 0;
		item.list.push({
			check: check,
			pri: pri
		})
	});
	$.each(item.list, function(index, ite) {
		if(ite.check == true) {
			num += ite.pri;
		}
	});
	$('.team_sum').find('span').text(num*inp);
})

$(".sum_ipt").bind("input propertychange",function () {
	var val = $(this).val();
  	if(val >=1){
  		var s = num*val;
   		$('.team_sum').find('span').text(s)
  	}
});