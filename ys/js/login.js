$(function () {  
    //判断是否登录过
    if(localStorage.getItem('admin') != null) {
      let taoge = JSON.parse(localStorage.getItem('admin'));
          $('.dlys').html('您好！' + taoge.user);
          $('.dlys').css('font-size','18px');
          $('.dlys').css('color','#f40');
          $('.dlys').append(`<span class="tc" style="margin-left: 10px;font-size: 14px">退出</span>`);
          $('.dlys').removeClass('dlys')
  }
  //创建登录信息
  $('.dlys').click(function() {
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
      });
      btn.addEventListener('click',function() {
          $('#loginStorage').css('visibility','hidden');
      });
  
      return false;
  
  
  });
  //退出登录
  $('span.tc').click(function () {  
      localStorage.removeItem('admin');
      window.location.href = window.location.href;
  });
  
  
  
  
  
  
  
  })