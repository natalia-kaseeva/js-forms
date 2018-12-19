$(document).ready(function(){

	var commentCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');

		// Метод инициализации (запуска) модуля
		var init = function(){
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				_formValidate(event);
			});
		}

		// Приватные методы
		var _formValidate = function (event) {
    		event.preventDefault();
			
    		var _textarea=_form.find('textarea'),
    			_commentErrorEmpty=_form.find('.notify'),
    			valid=true;

    		$.each(_textarea,function(index,val){
    			var input=$(val),
    				value=input.val().trim();

			if (value.length===0) {
				_commentErrorEmpty.fadeIn('notify--error-hide');
				valid=false
			} else {
				_commentErrorEmpty.fadeOut();
				$('form').unbind('submit').submit()
			}

			_textarea.on('focus', function(){
				_commentErrorEmpty.fadeOut(400);
				
			});
			});
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentCheck.init();

});