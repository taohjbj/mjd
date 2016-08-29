/**
 * Created by acer on 2016/8/28.
 */
window.onload = function () {
    search();
    secondKill();
    // 使用transfrom搭配transion的方式轮播；首先获取哪个要轮播；
    var pic = document.querySelectorAll('.jd-banner .banner-pic li');
    var box = document.querySelectorAll('.jd-banner .banner-box li');
    // 同时还需要定义哪个盒子动；
    var picBox = document.querySelector('.jd-banner .banner-pic');
    // 还需要知道一张图片的宽度
    var picWidth = pic[0].offsetWidth;
    // 声明一个数值表示当前属于哪一张图片;初始值为第一张
    var index = 1;
    var key = 0;
    // 定义一个加上过度效果的函数
    function addTransion(){
        picBox.style.transition = 'all 0.3s ease 0s';
        picBox.style.webkitTransition = 'all 0.3s ease 0s'
    }
    // 因为无缝连接的时候需要跳转到开始或者结尾；那么就不需要过度效果；这时候就要移除
    function removeTransition(){
        picBox.style.transition = 'none';
        picBox.style.webkittransition = 'none';
    }
    // 设置变化距离
    function setTransform (t) {
        // 注意着个translate是需要带px的!!!
        picBox.style.transform ='translateX('+ t +'px)';
    }
    // 开启定时器; 装对象用null;
    var timer = null;
    timer = setInterval(function(){
        index ++ ;
        key ++ ;
        // 判断当大于第9张图片和小于第0张图片的时候清除过度瞬间滚回另一边;
       /* if(index >= 9){
            removeTransition();
             console.log('');
            index = 1;
            picBox.style.transform = 'translateX('+ -index * picWidth +'px)';
        }*/
        addTransion();
        setTransform(-index * picWidth);
        for(var i = 0 ; i < box.length ; i++){
            box[i].setAttribute('class',' ');
        }
        if(key > 7) {
            key = 0;
        }
        box[key].setAttribute('class','banner-current');
    },1000)

    // 草拟吗的这里要小写end addEventListener 可以同时监听多个事件；不会层叠掉上面的；这里index同步变化
    // 动画完成效果会有一个事件
    picBox.addEventListener('transitionend',function(){
        if(index >= 9) {
            removeTransition();
            picBox.style.transform = 'translateX(-640px)';
            index = 1;
        }
    })
    picBox.addEventListener('webkitTransitionEnd',function(){
         console.log('2');
    })
    // 点击小圆点让图片和点点都滚过来
    for(var i = 0 ; i < box.length ; i++){
        box[i].index = i;
        box[i].onclick = function(){
            // 去除所有的样式
            for(var j = 0 ; j < box.length ; j++){
                box[j].setAttribute('class',' ');
            }
            this.className = 'banner-current';
            // js加载的一瞬间所有的li事件已经声明完成了；所以点击的时候并不知道点击的是哪一个box[i];index保存
            addTransion();
            setTransform(-(this.index + 1) * picWidth);
            index = key = this.index;
            // 这里我直接index+1 没有执行哦？？？？？？？？？？？？？？？？？？？？？？？
            index = index + 1;
            console.log('datu'+index);
            console.log('xiaotu'+key);
        }
    }





}
// 搜索渐变
function search() {
    // 首先是透明；高过banne就显示原来的透明度；其中不断递增
    // 先获取到bar和banner；
    var header = document.querySelector('.jd-header-box');
    var banner = document.querySelector('.jd-banner');
    // 开始下拉变化开始
    var height = banner.offsetHeight;
    window.onscroll = function () {
        // 获取的是哪个的scrollTop
        var top = document.body.scrollTop;
        // 当banner高度大于滚动条的时候；透明逐渐提升
        if (height >= top) {
            // 计算滑动距离与banner高度的比例；再乘以原本的透明度得到实际透明度
            var opc = top / height * 0.85;
            header.style.background = "rgba(201, 21, 35, " + opc + ")";
        } else {
            header.style.background = 'rgba(201, 21, 35, 0.85)';
        }
    }
}
// 秒杀倒计时
function secondKill() {
    //  同样获得所有的需要改变的时间对象
    var time = document.querySelectorAll('.sk-left-time .num');
    // 两种方法实现；一个计算一个倒计时的总秒数计时器递减；另一个是知道多少时间截止；截止时间减去当前时间;
    // 月份从0开始
    var endTime = new Date(2016, 7, 29, 14, 0, 0);
    setInterval(function () {
        var nowTime = new Date();
        var result = endTime - nowTime ;
        // 这里没有算天数就余个多少小时
        var h = parseInt(result / (1000 * 3600));
        // 得到分钟数
        var m = parseInt((result / (1000 * 60)) % 60);
        // 秒数
        var s = parseInt((result/1000) % 60);
        time[0].innerHTML = h > 10 ? parseInt(h / 10) : 0 ;
        time[1].innerHTML = h % 10 ;
        time[2].innerHTML = m > 10 ? parseInt(m / 10) : 0 ;
        time[3].innerHTML = m % 10 ;
        time[4].innerHTML = s > 10 ? parseInt(s / 10) : 0 ;
        time[5].innerHTML = s % 10 ;
    }, 1000)

}












