$(function () {

  //背景动画
  let bool = true;
  let bool2 = true;
  $('#content .bg').css('transition', 'transform 20s linear,opacity 2s linear');
  $('#content .bg').css('transform', 'scaleX(130%)');
  let q = setInterval(() => {
    if (bool) {
      $('#content .bg').css('transform', 'scaleX(100%)');
      bool = false;
    } else {
      $('#content .bg').css('transform', 'scaleX(130%)');
      bool = true;
    }
  }, 20000);

  let w = setInterval(() => {
    if (bool2) {
      $('#content .bg2').css('opacity', 0);
      bool2 = false;
    } else {
      $('#content .bg2').css('opacity', 1);
      bool2 = true;
    }
  }, 10000);

  //背景变化动画 异步实现方式
    // 背景拉长动画
/*   function red() {
    let i = 1;
    let big = setInterval(() => {
      i = i + 0.001;
      let j = i.toFixed(3);
      $('#content .bg').css('transform', `scaleX(${j})`);
      if (i > 1.299) {
        clearInterval(big);
      }
    }, 100)
  }
  function green() {
    let i = 1.3;
    let big = setInterval(() => {
      i = i - 0.001;
      let j = i.toFixed(3);
      $('#content .bg').css('transform', `scaleX(${i})`);
      if (i < 1.001) {
        clearInterval(big);
      }
    }, 100)
  }
  function tt() {

  }

  let light = (fn, timer) => new Promise(resolve => {
    setTimeout(function () {
      fn()
      resolve()
    }, timer)
  })

  // times为交替次数
  function start(times) {
    if (!times) {
      return
    }

    times--
    Promise.resolve()
      .then(() => light(red, 1000))
      .then(() => light(green, 31000))
      .then(() => light(tt, 31000))
      .then(() => start(times))
  }
  start(99999)

  function c1() {
    $('#content .bg1').css('opacity', 0);
    $('#content .bg2').css('opacity', 1);
  }
  function c2() {
    $('#content .bg1').css('opacity', 1);
    $('#content .bg2').css('opacity', 0);
  }
  let bgColor = (fn, timer) => new Promise(resolve => {
    setTimeout(function () {
      fn()
      resolve()
    }, timer)
  })

  // times为交替次数
  function start1(times) {
    if (!times) {
      return
    }

    times--
    Promise.resolve()
      .then(() => bgColor(c1, 10000))
      .then(() => bgColor(c2, 10000))
      .then(() => start1(times))
  }
  start1(99999) */


  //点击切换语言
  let area = $('.area_info p'),
    r_name = $('.cv_txt'),
    v_lock = true,
    voice_play = $('.voice'),
    voice_playin = $('.voice_play'),
    bf = 0,
    roles_v = $('#audio audio');

  for (let i = 0; i < area.length; i++) {
    area[i].addEventListener('click', function () {
      $(this).removeClass('area_active').siblings('p').addClass('area_active');
      $(r_name[i]).addClass('notin').siblings('p').removeClass('notin');
      $(roles_v[i]).removeClass('v_in').siblings('audio').addClass('v_in');
      roles_v[i].load();
      voice_playin.css('display', 'none');
      bf = 0;
    })
  }

  //点击播放语音

  voice_play.click(function () {
    if(bf==1) {
      $('.v_in')[0].pause();
      voice_playin.css('display', 'none');
      bf = 0;
      return;
    }else {
      voice_playin.css('display', 'block');
      $('.v_in')[0].play();
      bf = 1;
    }
    
  });

  //判断视频是否结束
  $(roles_v).each(function (indexInArray, item) { 
     item.addEventListener('ended', function(){
      voice_playin.css('display', 'none');
      console.log($('.v_in')[0]);
      $('.v_jp')[0].load();
      bf = 0;
    },false,bf);
  });



//角色列表
  let rBtn = $('.right'),
      roles_li = $('#rolesList li'),
      r_index = 0;
  rBtn.click(function() {
    r_index++;
    $(roles_li[r_index]).addClass('r_list--active').siblings('li').removeClass('r_list--active');
    if(r_index==3){

    }

  })

});
























