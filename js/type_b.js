$(function(){

  $('body').delegate('.talkback_go','click', function(){
    var tal_header = ($(".talkback header").outerHeight());
    var tal_container= ($(".talkback #container").outerHeight());
    var tal_footer= ($(".talkback footer").outerHeight());
    // $('.wrap').css({"height":talback})$('#wrap').css({"height":"1890"+"px"});
    // 
    // $('.main').css({"display":"none"})
    $('.talkback').css({"left":"0","opacity":"1", "display":"block"});
    $('.main').css({
      overflow:'hidden',
      height:$('.talkback').height()
    });
  })
  $('.talkback .main_movie').on('click', function(){
    
    $('.main').removeAttr('style').css({"display":"block", })
    $('.talkback').css({"left":"-2000px","opacity":"0", "display":"none"})
    
  })

  function toggle_slide(_target) {
      var _target = $(_target);
      _target.closest('dl').hasClass('single') ? // 하나만 오픈
          (
              _target.parent().hasClass('active') ?
              (
                  _target.parent().next('dd').stop().slideUp(),
                  _target.parent().removeClass('active')
              ) : (
                  _target.parent().addClass('active'),
                  _target.parent().siblings().removeClass('active'),
                  _target.closest('dl').children('dd').stop().slideUp(),
                  _target.parent().next('dd').stop().slideDown()
              )
          ) : ( // 각각 제어
              _target.parent().hasClass('active') ?
              (
                  _target.parent().next('dd').stop().slideUp(),
                  _target.parent().removeClass('active')
              ) : (
                  _target.parent().addClass('active'),
                  _target.parent().next('dd').stop().slideDown()
              )
          )
  }
  $('.board_type_toggle > * > *').click(function() {
    var _target = $(this);
    if (_target.parent()[0].nodeName == 'DT') {
      $('.board_type_toggle dd').stop().slideUp();
      $('.board_type_toggle dt').stop().slideDown();
      $(this).parent().stop().slideUp();
      $(this).parent().next('dd').stop().slideDown();
    } else if(_target.parent()[0].nodeName == 'DD') {
      $('.board_type_toggle dd').stop().slideUp();
      $('.board_type_toggle dt').stop().slideDown();
    }

    // toggle_slide(this);
});
})//ready