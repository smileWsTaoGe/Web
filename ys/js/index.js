$(function(){

    //点击播放背景音乐
        let music = 0;
        let yy = $('#nav .logo .music');
        yy[0].pause();//初始化暂停
        $('#nav .logo img').click(function(){
            if(music == 0){
                this.src = 'images/index/music.png';
                yy[0].play();//播放
                music++;
            }else{
                this.src = 'images/index/music-off.png'
                music = 0;
                yy[0].pause();
            }
        });
    
    //鼠标移入添加顶部a标签样式
    let a = $('#nav .navLeft a');
    $(a).mouseover(function(e){
        a = e.target;
        a.classList.add('line');
        $(a).siblings().removeClass('line');
    });
    //鼠标移出顶部导航栏回到首页
    $('.navList').mouseleave(function () { 
        $('.sy').addClass('line');
        $('.sy').siblings().removeClass('line');
    });

    //背景视频播放
    $('#content .sp1')[0].load();
    $('#content .sp1')[0].play();


    //点击播放视频
    $('#content .info .video .play').click(function(){
        $('#content .info .video .sp2').css('display','block');
        $('.ysjs')[0].play();
        $('body').css('overflowY','hidden');
    });
    //点击关闭视频
    $('#content .info .close').click(function(){
        $('#content .info .video .sp2').css('display','none');
        $('.ysjs')[0].load();
        $('body').css('overflowY','auto');
    });

    //12+适龄提示
    $('#content .cadpa img.ts').click(function(){  
        $('#content .cadpa .txt').css('visibility','visible');
        $('body').css('overflowY','hidden');
    });
    $('#content .cadpa .txt img.close2').click(function(){
        $('#content .cadpa .txt').css('visibility','hidden');
        $('body').css('overflowY','auto');
    });
    $('div.txt').click(function(){
        $('#content .cadpa .txt').css('visibility','hidden')
        $('body').css('overflowY','auto');
    });
    $('#content .cadpa img.tsTxt').click(function(e){  
        return false;
    });



    //轮播图
    let div = $('#news .lunBo')
    let box = $('#news .lunBo .imgBox');
    let index = 0;
    let lock = true;
    let span = $('#news .lunBo span');
    firstImg = $('#news .lunBo .imgBox a img')[0].cloneNode();
    box[0].appendChild(firstImg);
    //自动轮播函数
    function lunBo() {
        index++;
        box.css('left',-index * 640 + 'px');
        if(index==4) {
            setTimeout(() => {
                index = 0;
                box.css('left','0');
                box.css('transition','none');
            }, 1000);
           
        }
        box.css('transition','left 1s');
        setTimeout(() => {
            index = index==4?0:index;
            $(span).eq(index).addClass('in').siblings().removeClass('in');
        }, 500);    
    }

    //开始自动轮播
    let autoplay = setInterval(lunBo,5000);
    $(div).mouseover(function(){
        clearInterval(autoplay);
    });
    $(div).mouseout(function(){
        clearInterval(autoplay);
        autoplay = setInterval(lunBo,5000);
    });

    //轮播浏览
    for(let i=0; i<span.length; i++) {
        span[i].onclick = function() {
            if(!lock) return;
            for(let j=0; j<span.length; j++) {
                span[j].classList.remove('in')
            }
            this.classList.add('in');
            box.css('left',i * -640 + 'px');
            index = i;
            lock = false;
            setTimeout(() => {
                lock = true;
            }, 1000);
        }   
    }


    //新闻板块标题
    $('#news .info li').click(function(){
        $(this).addClass('in').siblings('li').removeClass('in');
        let newsIndex = $(this).index();
        switch(newsIndex) {
            case 0:
                $('#news .info .msg').html(zuiNews);
                break;
            case 1:
                $('#news .info .msg').html(news);
                break;
            case 2:
                $('#news .info .msg').html(notice);
                break;
            case 3:
                $('#news .info .msg').html(active); 
                break;
        }
    });
    
    // 侧边信息栏
    let sDiv = $('.social');
    let sBtn = $('.social__btn');
    sDiv.css('opacity','0');
    //滑动显示
    $(document).scroll(function () { 
        let h = $(this).scrollTop();
        if(h>400) {
            sDiv.css('opacity','1');
        }else {
            sDiv.css('opacity','0');
        }
    });
    //点击收缩
    sBtn.click(function() {
        let len = this.classList.length;
        if(len == 2){
            $(this).addClass('btn2');
            sDiv.css('width','0');
        }else{
            $(this).removeClass('btn2');
            sDiv.css('width','174px');
        }
    });

    //判断是否登录过
    if(localStorage.getItem('admin') == null) {
        
    }else {
        let taoge = JSON.parse(localStorage.getItem('admin'));
            $('.dlys').html('您好！' + taoge.user);
            $('.dlys').css('font-size','18px');
            $('.dlys').css('color','#f40');
            $('.dlys').append(`<span class="tc" style="margin-left: 10px;font-size: 14px">退出</span>`);
            $('.dlys').removeClass('dlys')
        }
    //创建登录信息
    $('.dlys').click(function() {
        $('body').css('overflow-y','hidden');
        $('#loginStorage').css('visibility','visible');
        let btn = document.querySelector('.close-icon');
        let dl = document.querySelector('#dl');
        dl.addEventListener('click',function() {
            let user = document.querySelector('#user').value;
            let passward = document.querySelector('#passward').value;
            let admin = {
                'user' : user,
                'passward' : passward,
            }
            localStorage.setItem('admin',JSON.stringify(admin));
            alert('欢迎回来！' + user);
            window.location.href = window.location.href;
            // $('#loginStorage').css('visibility','hidden');
            
        });
        btn.addEventListener('click',function() {
            $('#loginStorage').css('visibility','hidden');
            $('body').css('overflow-y','auto');
        });

        return false;


    });
    //退出登录
    $('span.tc').click(function () {  
        localStorage.removeItem('admin');
        window.location.href = window.location.href;
    });

    
})