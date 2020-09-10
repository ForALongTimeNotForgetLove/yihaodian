$('#sortPrice').on('click', function() {
	$(this).toggleClass('one');
	var list = [];
	$('.cate_list>li').each(function(index) {
		list[index] = $(this);
	})
	if($(this).hasClass('one')==true){
		for (let i=0;i<list.length;i++) {
			for (let j=0;j<list.length-i-1;j++) {
				var lis = list[j].find('.price').children('span').text().replace(/[^\d.]/g,'')-0;
				var lit = list[j+1].find('.price').children('span').text().replace(/[^\d.]/g,'')-0;
				if(lis<lit){
					let item = list[j+1];
					list[j+1] = list[j];
					list[j]=item;
				}
			}
		}
	}else{
		for (let i=0;i<list.length;i++) {
			for (let j=0;j<list.length-i-1;j++) {
				var lis = list[j].find('.price').children('span').text().replace(/[^\d.]/g,'')-0;
				var lit = list[j+1].find('.price').children('span').text().replace(/[^\d.]/g,'')-0;
				if(lis>lit){
					let item = list[j+1];
					list[j+1] = list[j];
					list[j]=item;
				}
			}
		}
	}
	$('.cate_list').empty();
	for(let i=0;i<list.length;i++){
        $('.cate_list').append(list[i])
    }
})