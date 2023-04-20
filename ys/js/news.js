$(function () {  
    //点击播放背景音乐
    let music = 0;
    let yy = $('#nav .logo .music');
    yy[0].pause();//初始化暂停
    $('#nav .logo img').click(function(){
        if(music == 0){
            this.src = '../images/index/music.png';
            yy[0].play();//播放
            music++;
        }else{
            this.src = '../images/index/music-off.png'
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


      //渲染数据
      //头部新闻栏

      let $news_title = $('.news_t_nr');
      let news_title_data = news_title.data.list;
      let  news_title_li = '';
      for(let i=0; i<3; i++) {
        news_title_li += `
                        <li class="ntnr_li">
                        <a href="#" class="ntnr_li_lj">
                            <div class="img_sz">
                                <img src="${news_title_data[i].ext[1].value[0].url}" alt="">
                            </div>
                            <div class="new_zt">${news_title_data[i].title}</div>
                        </a>
                        <div class="ntnr_li_rq">
                            <span class="new_date">${news_title_data[i].start_time.slice(0,10)}</span>
                            <span class="new_lb">
                                新闻
                            </span>
                        </div>
                    </li>  `;
        }
      $news_title.html(news_title_li);


   //新闻列表栏
    let listSize = 5;
    let $news_list = $('ul.xwnr');
    let news_list_data = newsList.data.list;
    
    addInfo(news_list_data,listSize);

     //点击加载更多
     let $moreLi = $('.li_end');
     $moreLi.click(() => {
        $news_list.html('');
        listSize = 10;
        // listSize += 5;   max = 10条数据
        addInfo(news_list_data,listSize);
     })

     //列表信息渲染
     function addInfo(info,listSize) {
        let  news_list_li = '';
        for(let i=0; i<listSize; i++) {
            news_list_li += `
                           <li class="lis">
                           <a href="#" class="xwnr_li">
                               <img src="${info[i].ext[1].value[0].url}" class="">
                               <div class="xwnr_li_bt">
                                   <h3 class="xwnr_bt">${info[i].title}</h3>
                                   <div class="xwnr_li_qk">
                                       <a class="xwnr_rq">${info[i].start_time.slice(0,10)}</a> 
                                       <a href="#" class="xw">新闻</a>
                                   </div>
                               </div>
                           </a>
                       </li>  `;
            }
            news_list_li += `<li class="li_end">加载更多</li>`;
            $news_list.html(news_list_li);
     }
                           



//点击其他分页
let $newsNav = $('a.nmt_bt span');
for(let i=0; i<$newsNav.length; i++) {
    $($newsNav[i]).click(function() {
        listSize = 5;
        for(let j=0;j<$newsNav.length; j++) {
            $($newsNav[j]).removeClass('in')
        }
        $(this).addClass('in').siblings('.nmt_bt').removeClass('in');
        addInfo(news_list_data,listSize);
        return false;
    });
}

});
      
      
                       

   
      


















  