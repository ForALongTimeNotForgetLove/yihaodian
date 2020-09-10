(function (global) {
    var cookie_ = {
        //设置cookie
        setCookie: function (name, value, time) {
            if (typeof name == 'undefined' || typeof value == 'undefined' || typeof time == 'undefined') {
                //throw 抛出错误信息
                throw 'consturor is err!'
            }
            var od = new Date();
            od.setDate(od.getDate() + time); //负数为删除，正数为过期时间
            document.cookie = name + '=' + value + ';expires=' + od;
        },
        //获取cookie
        getCookie(name) {
            var cookie_ = document.cookie;
            var arr = cookie_.split('; ');
            for (var i = 0; i < arr.length; i++) {
                var art = arr[i].split('=');
                if (art[0] == name) {
                    return art[1];
                }
            }
        },
        //删除
        removeCookie(name){
            //作为对象的方法中，使用this时，this指向当前对象
            //此时this === cookie_
            this.setCookie(name,1,-1);
        }
    }
    global.mycookie = cookie_;
})(window) //window在浏览器下是顶层对象，