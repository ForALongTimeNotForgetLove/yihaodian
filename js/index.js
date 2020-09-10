//客户服务
$('.ss_listBg').hover(function() {
	$('.ss_list_bg').slideDown()
}, function() {
	$('.ss_list_bg').slideUp()
})

//购物车
$('.car_t').hover(function(){
	$('.last').show()
},function(){
	$('.last').hide()
})
$('.last').hover(function(){
	$(this).show()
},function(){
	$(this).hide()
})
var iten = {list:[]};
$('.shop>ul>li').each(function(index,item){
	var num = $('.plush input').val()-0;
	var price = $('.J_smallTotalPrice').eq(index).text().replace(/[^\d.]/g,'')-0;
	var  totalprices = price*num-0; 
	iten.list.push({
		num:num,
		price:price,
		totalprices:totalprices
	})
	iten.total=0;
	iten.totalNum=0;
	$.each(iten.list, function(index,a) {
		iten.total+=a.totalprices;
		iten.totalNum+=a.num;
	});
})
$('.J_totalPrice').text('￥'+iten.total);
$('.J_totalCount').text(iten.totalNum);
//增加
$('.J_btnAddCount').on('click',function(){
	var index = $(this).parents('li').index();
	var n = ++iten.list[index].num;
	np(index,n);
})
//删除
$('.J_btnDelCount').on('click',function(){
	var index = $(this).parents('li').index();
	var n = --iten.list[index].num;
	np(index,n);
	if(n<=0){
		$(this).parents('li').remove();
		iten.list.splice(index,1)
	}
})
function np(index,n){
	var p = iten.list[index].price;
	iten.list[index]={
		num:n,
		price:p,
		totalprices :p*n
	}
	iten.total=0;
	iten.totalNum=0;
	$.each(iten.list, function(index,tot) {
		iten.total+=tot.totalprices;
		iten.totalNum+=tot.num;
	});
	texts(index);
}
function texts(index){
	$('.plush input').eq(index).val(iten.list[index].num);
	$('.J_smallTotalPrice').eq(index).text('￥'+iten.list[index].totalprices);
	$('.J_totalPrice').text('￥'+iten.total);
	$('.J_totalCount').text(iten.totalNum);
}
$('.J_btnDelete').on('click',function(){
	var index=$(this).parents('li').index();
	$(this).parents('li').remove();
	iten.list.splice(index,1);
	iten.total=0;
	iten.totalNum=0;
	$.each(iten.list, function(index,b) {
		iten.total+=b.totalprices;
		iten.totalNum+=b.num;
	});
	$('.J_totalPrice').text('￥'+iten.total);
	$('.J_totalCount').text(iten.totalNum);	
})

//商品分类
$('.fj').hover(function() {
	$(this).css({
		'background': '#FFFFFF',
		'color': 'red'
	})
	$(this).next('.zj').css('display', 'block')
}, function() {
	$(this).css({
		'background': '',
		'color': '#FFFFFF'
	})
	$(this).next('.zj').css('display', 'none')
})
$('.zj').hover(function() {
	$(this).show()
	$(this).prev('.fj').css({
		'background': '#FFFFFF',
		'color': 'red'
	})
}, function() {
	$(this).hide()
	$(this).prev('.fj').css({
		'background': '',
		'color': '#FFFFFF'
	})
})

//轮播图
//var time = null;
//var index = 0;
//var imgs = document.getElementsByClassName('slide_box')[0].children;
//var dian = document.getElementsByClassName('num')[0].children;
//function item(){
//	index++;
//	if(index >= imgs.length) {
//		index = 0;
//	}
//	for(var i = 0; i < imgs.length; i++) {
//		dian[i].className = '';
//		imgs[i].style.display = 'none';
//	}
//	dian[index].className = 'active';
//	imgs[index].style.display = 'block';
//}
//time = setInterval(item, 1000);
//for(var j = 0; j < imgs.length; j++) {
//	(function(m) {
//		dian[m].onmouseenter = function() {
//			clearInterval(time);
//			for(var i = 0; i < imgs.length; i++) {
//				dian[i].className = '';
//				imgs[i].style.display = 'none';
//			}
//			dian[m].className = 'active';
//			imgs[m].style.display = 'block';
//		}
//		dian[m].onmouseleave = function() {
//			time = setInterval(item, 1000);
//			index = m;
//		}
//	}(j))
//}
var time = null;
var index = 0;
function item(){
	index++;
	if(index>=$('.slide_box>li').length){
		index = 0;
	}
	for (var i=0;i<=$('.slide_box>li').length;i++) {
		$('.num>li').eq(i).removeClass()
		$('.slide_box>li').eq(i).removeClass().fadeOut(1000)
	}
	$('.num>li').eq(index).addClass('active')
	$('.slide_box>li').eq(index).addClass('active').fadeIn(1000)
}
time = setInterval(item,2000)
for (var j=0;j<=$('.slide_box>li').length;j++) {
	(function(m){
		$('.num>li').eq(m).hover(function(){
			clearInterval(time);
			for (var i=0;i<=$('.slide_box>li').length;i++) {
				$('.num>li').eq(i).removeClass()
				$('.slide_box>li').eq(i).removeClass().fadeOut(1000)
			}
			$('.num>li').eq(m).addClass('active')
			$('.slide_box>li').eq(m).addClass('active').fadeIn(1000)
		},function(){
			time = setInterval(item,2000);
			index = m;
		})
	}(j))
}

//快讯
$(function () {
    movedome();
});

function movedome(){
        var top=0;//上边距的偏移量
        var stop=false;//动画开始
        setInterval(function(){
        	//鼠标放上停止
            if(stop==true){
                return;
            }
            $("#express").children("li").first().animate({"margin-top":top-=2},0,function(){
                if(!$(this).is("animated")){//is() 方法用于查看选择的元素是否匹配选择器
                    if(-top>$(this).height()){//当top负值与li一样高时，就会进行下一次动画   -top为了把top值转化为正值
                        $(this).css("margin-top","0px").appendTo($("#express"));//appendTO  插入内容末尾  执行完插入到内容末尾
                        top=0;//一次动画结束从新赋值为0
                    }
                }
            });
        },50);
        $("#express").hover(function(){
            $(this).css("cursor","pointer");
            stop=true;//停止动画
        },function(){
            stop=false;//开始动画
        });
    }