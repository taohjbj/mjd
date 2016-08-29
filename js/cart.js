/**
 * Created by acer on 2016/8/29.
 */
window.onload = function (){
    // 首先找到所有的dom；然后添加点击事件切换样式
    var checkBox = document.querySelectorAll('.buy-check');
    for(var i = 0 ; i < checkBox.length ; i++){
        checkBox[i].onclick = function () {
            // jq的话就可以直接toggle切换；但是原生只能通过判断;没有这个属性就是null;
            var haveChecked = this.getAttribute('checked', '');
            // 这里数据类型为object和string
            // console.log(typeof haveChecked);
            if(haveChecked === null){
                this.setAttribute('checked','');
            }else{
                this.removeAttribute('checked','');
            }
        };
    }

    // 点击删除按钮实现弹窗；首先获得删除按钮的dom
    var trashs = document.querySelectorAll('.buy-info-trash');
    // 所有商品
    var some = document.querySelectorAll('.jd-buy-info li');
    // 所有确认按钮
    var deleteAll = document.querySelector('.tanWin-delete');
    // 删除按钮
    var cancle = document.querySelector('.tanWin-cancle');
    // 如果这家店里面没有任何li了那么就删除这个节点
    var jdBuy = document.querySelectorAll('.jd-buy');
    var winBox = document.querySelector('.tanWin');
    var content = winBox.children[0].children[0];
    for(var i = 0 ; i < trashs.length ; i++){
        trashs[i].index = i;
        trashs[i].onclick = function(){
            // 这里的垃圾桶序号对应商品序号
            var that = this;
            winBox.style.display = 'block';
            content.setAttribute('class','content current');
            // 点击确认删除商品;每个商品都对应一个垃圾桶；找到所有的商品；
            deleteAll.onclick = function(){
                // 这里是另一事件；this值已经发发生变化
                // console.log(that.index);
                //some[that.index].style.display = 'none';
                // 当点击确认的时候删除父节点中的当前trash序号对应的some；
                some[that.index].parentNode.removeChild(some[that.index]);
                closeWin();
                query();
            }
        }
    }
    // 点击取消隐藏窗口
    cancle.onclick = function (){
        winBox.style.display = 'none';
    }
    // 点击取消窗口封装一下；好调用
    function closeWin(){
        winBox.style.display = 'none';
    }
    // 如何删除到最后这个盒子里面的li都没了；那么这个容器也隐藏;
    function query(){
        for(var i = 0 ; i < jdBuy.length ; i++){
            // 这里和点击事件不一样；点击事件是最开始就绑定了所有的点击事件；所以点击的时候里面那个dom[i]可能是任何循环到的数字；但是这里不一样；它每次都是在当前执行环境中直接执行；在某一次循环中的li标签为0就直接进入判断语句；隐藏完毕继续循环
            var li = jdBuy[i].querySelectorAll('li');
             console.log(li.length);
            if(li.length == 0){
                // 如果没有垃圾桶了那么就隐藏这个节点
                jdBuy[i].style.display = 'none';
            }
        }
    }

}







