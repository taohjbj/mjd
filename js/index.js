/**
 * Created by acer on 2016/8/28.
 */
window.onload = function () {
    search();
    secondKill();
    // ʹ��transfrom����transion�ķ�ʽ�ֲ������Ȼ�ȡ�ĸ�Ҫ�ֲ���
    var pic = document.querySelectorAll('.jd-banner .banner-pic li');
    var box = document.querySelectorAll('.jd-banner .banner-box li');
    // ͬʱ����Ҫ�����ĸ����Ӷ���
    var picBox = document.querySelector('.jd-banner .banner-pic');
    // ����Ҫ֪��һ��ͼƬ�Ŀ��
    var picWidth = pic[0].offsetWidth;
    // ����һ����ֵ��ʾ��ǰ������һ��ͼƬ;��ʼֵΪ��һ��
    var index = 1;
    var key = 0;
    // ����һ�����Ϲ���Ч���ĺ���
    function addTransion(){
        picBox.style.transition = 'all 0.3s ease 0s';
        picBox.style.webkitTransition = 'all 0.3s ease 0s'
    }
    // ��Ϊ�޷����ӵ�ʱ����Ҫ��ת����ʼ���߽�β����ô�Ͳ���Ҫ����Ч������ʱ���Ҫ�Ƴ�
    function removeTransition(){
        picBox.style.transition = 'none';
        picBox.style.webkittransition = 'none';
    }
    // ���ñ仯����
    function setTransform (t) {
        // ע���Ÿ�translate����Ҫ��px��!!!
        picBox.style.transform ='translateX('+ t +'px)';
    }
    // ������ʱ��; װ������null;
    var timer = null;
    timer = setInterval(function(){
        index ++ ;
        key ++ ;
        // �жϵ����ڵ�9��ͼƬ��С�ڵ�0��ͼƬ��ʱ���������˲�������һ��;
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

    // �����������ҪСдend addEventListener ����ͬʱ��������¼���������������ģ�����indexͬ���仯
    // �������Ч������һ���¼�
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
    // ���СԲ����ͼƬ�͵�㶼������
    for(var i = 0 ; i < box.length ; i++){
        box[i].index = i;
        box[i].onclick = function(){
            // ȥ�����е���ʽ
            for(var j = 0 ; j < box.length ; j++){
                box[j].setAttribute('class',' ');
            }
            this.className = 'banner-current';
            // js���ص�һ˲�����е�li�¼��Ѿ���������ˣ����Ե����ʱ�򲢲�֪�����������һ��box[i];index����
            addTransion();
            setTransform(-(this.index + 1) * picWidth);
            index = key = this.index;
            // ������ֱ��index+1 û��ִ��Ŷ����������������������������������������������
            index = index + 1;
            console.log('datu'+index);
            console.log('xiaotu'+key);
        }
    }





}
// ��������
function search() {
    // ������͸�����߹�banne����ʾԭ����͸���ȣ����в��ϵ���
    // �Ȼ�ȡ��bar��banner��
    var header = document.querySelector('.jd-header-box');
    var banner = document.querySelector('.jd-banner');
    // ��ʼ�����仯��ʼ
    var height = banner.offsetHeight;
    window.onscroll = function () {
        // ��ȡ�����ĸ���scrollTop
        var top = document.body.scrollTop;
        // ��banner�߶ȴ��ڹ�������ʱ��͸��������
        if (height >= top) {
            // ���㻬��������banner�߶ȵı������ٳ���ԭ����͸���ȵõ�ʵ��͸����
            var opc = top / height * 0.85;
            header.style.background = "rgba(201, 21, 35, " + opc + ")";
        } else {
            header.style.background = 'rgba(201, 21, 35, 0.85)';
        }
    }
}
// ��ɱ����ʱ
function secondKill() {
    //  ͬ��������е���Ҫ�ı��ʱ�����
    var time = document.querySelectorAll('.sk-left-time .num');
    // ���ַ���ʵ�֣�һ������һ������ʱ����������ʱ���ݼ�����һ����֪������ʱ���ֹ����ֹʱ���ȥ��ǰʱ��;
    // �·ݴ�0��ʼ
    var endTime = new Date(2016, 7, 29, 14, 0, 0);
    setInterval(function () {
        var nowTime = new Date();
        var result = endTime - nowTime ;
        // ����û�����������������Сʱ
        var h = parseInt(result / (1000 * 3600));
        // �õ�������
        var m = parseInt((result / (1000 * 60)) % 60);
        // ����
        var s = parseInt((result/1000) % 60);
        time[0].innerHTML = h > 10 ? parseInt(h / 10) : 0 ;
        time[1].innerHTML = h % 10 ;
        time[2].innerHTML = m > 10 ? parseInt(m / 10) : 0 ;
        time[3].innerHTML = m % 10 ;
        time[4].innerHTML = s > 10 ? parseInt(s / 10) : 0 ;
        time[5].innerHTML = s % 10 ;
    }, 1000)

}












