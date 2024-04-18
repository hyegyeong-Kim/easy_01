$(document).ready(function(){
});

/* toast */
function toast(_type, _message, _time){
  var _toast = $('.toast');
  _toast.addClass('active '+_type).html("<spna>"+_message+"</span>");
  if(_type == 'auto'){
      setTimeout(function(){
          toast_close(_toast);
      }, _time);
  } else if(_type == 'confirm') {
      _toast.append('<a href="#none" onclick="toast_close($(this).parent());" class="btn_close">close</a>');
      setTimeout(function(){
          _toast.find('.btn_close').focus();
      });
  }
}

function toast_close(_toast){
    var _toast;
    _toast.attr('class','toast');
    setTimeout(function(){
        $('body').find('[tabindex="-1"]').focus().removeAttr('tabindex');
        _toast.empty();
    }, 200);
}

/* preloader : open */
function loading_active(){
    $('.preloader_wrap').addClass('active');
}

/* preloader : close */
function loading_close(){
    $('.preloader_wrap').removeClass('active');
}

// function accordion(_target, evt){ // 23.08.18 nextElementSibling 테그가 없는 경우를 위한 수정
//     var evt,
//     accordion = document.querySelectorAll(_target, evt);
//     console.log('accordion :', accordion)
//     accordion.forEach(el => {
//     console.log('el :', el)
//     el.querySelectorAll('.board_type_toggle > dt > a').forEach((el, i) => {
//     el.addEventListener(evt, function(){
//     if(el.closest('dl').classList.contains('single')){
//     console.log('closet :', el.closest('dl'))
//     const parent_index = Array.from(el.closest('dl').getElementsByTagName('dt')).indexOf(el.parentNode);
//     console.log('parent_index :', parent_index)
//     for(j=0; j<el.closest('dl').getElementsByTagName('dt').length; j++){
//     if(i != j && el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling != null){
//     el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling.classList.remove('show');
//     }
//     }
//     }
//     if(el.parentNode.nextElementSibling != null){
//     if(el.parentNode.nextElementSibling.classList.contains('show')){
//     el.parentNode.nextElementSibling.style.height = '0px'
    
//     el.parentNode.nextElementSibling.addEventListener('transitionend', () => {
//     el.parentNode.nextElementSibling.classList.remove('show');
//     }, {once: true});
//     } else {
//     el.parentNode.nextElementSibling.classList.add('show');
    
//     el.parentNode.nextElementSibling.style.height = 'auto'
//     var height = el.parentNode.nextElementSibling.clientHeight + 'px'
//     el.parentNode.nextElementSibling.style.height = '0px'
//     setTimeout(() => {
//     el.parentNode.nextElementSibling.style.height = height
//     });
//     }
//     }
//     });
//     });
//     });
//     }
    
//     accordion('.board_type_toggle', 'click');