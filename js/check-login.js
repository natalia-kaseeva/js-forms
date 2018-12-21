$(document).ready(function(){

	var loginCheck = (function(){

		// Переменные модуля
		var _form = $('#login-form');

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

    		var _inputEmail=$('#inputEmail'),
    			_inputPassword=$('#inputPassword'),
    			_emailError=$('#emailError'),
    			_passwordError=$('#passwordError'),
    			_emailWrong=$('#emailWrong'),
    			_errorLogin=$('#errorLogin'),
    			_emailValue=_inputEmail.val().trim(),
    			_passwordValue=_inputPassword.val().trim();
    			_emailCorrect="mail@mail.com",
    			_passwordCorrect="123";

    		if (_emailValue.length === 0) {
    			_emailError.fadeIn('notify--error-hide');
    		} 

    		if (_passwordValue.length === 0) {
    			_passwordError.fadeIn('notify--error-hide');
    		} 

    		if (_emailValue !== '') {
    			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    			if (pattern.test(_emailValue)) {   				
    				if (_passwordValue !== _passwordCorrect && _passwordValue.length !== 0 ) {
    					_errorLogin.fadeIn('notify--error-hide');
    				} else if (_emailValue !== _emailCorrect && _passwordValue === _passwordCorrect) {
						_errorLogin.fadeIn('notify--error-hide');
    				}
    			} else {
    				_emailWrong.fadeIn('notify--error-hide');
					_errorLogin.fadeOut('notify--error-hide');
					_emailError.fadeOut('notify--error-hide');
    			}
    		}

    		if (_emailValue===_emailCorrect && _passwordValue===_passwordCorrect) {
    			$('form').unbind('submit').submit();
    		} 

    		_inputEmail.on('focus', function(){
				_emailError.fadeOut('notify--error-hide');
				_emailWrong.fadeOut('notify--error-hide');
				_errorLogin.fadeOut('notify--error-hide');

			});

			_inputPassword.on('focus', function(){
				_passwordError.fadeOut('notify--error-hide');
				_errorLogin.fadeOut('notify--error-hide');

			});

		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}

	}());

	// Запускаем модуль
	loginCheck.init();

}); 