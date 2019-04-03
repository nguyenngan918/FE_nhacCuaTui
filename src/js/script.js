$(document).ready(function (){
    $('ul.products.flex > li').hover(function () {
  
        // dat bien minSrc , ad src vao img
        var minSrc = $(this).find('img').attr('src')
        // bien maxSrc thay the _145 bang _org 
        var maxSrc = minSrc.replace('_145','_org')
        // attr src cua maxSrc vao img
        $('.hinhbu > img').attr('src',maxSrc)
      }, function () {
        // out
      }
    );
    $('.list-tabs ul li').click(function (e) {
      e.preventDefault();
      $('.list-tabs ul li a').removeClass('active')
      $(this).find('a').addClass('active')
      var index = $(this).index()
      $('.tab-content .tab').hide()
      $('.tab-content .tab').removeClass('active')
      $('.tab-content .tab').eq(index).addClass('active')
      $('.tab-content .tab').eq(index).show()
    });
});