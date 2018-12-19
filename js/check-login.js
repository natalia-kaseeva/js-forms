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

    		if (_emailValue.length === 0) {
    			_emailError.removeClass('notify--error-hide');
    		} 

    		if (_passwordValue.length === 0) {
    			_passwordError.removeClass('notify--error-hide');
    		} 

    		if (_emailValue !== '') {
    			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    			if (pattern.test(_emailValue)) {
    				if (_emailValue !== 'mail@mail.com' || _passwordValue !== '123') {
    					_errorLogin.removeClass('notify--error-hide');
    				}

    			} else {
    				_emailWrong.removeClass('notify--error-hide');
					_errorLogin.addClass('notify--error-hide');
					_emailError.addClass('notify--error-hide');
    			}
    		}

    		if (_emailValue==='mail@mail.com' && _passwordValue==='123') {
    			$('form').unbind('submit').submit();
    		} 

    		if (_emailValue.length === 0 || _passwordValue.length === 0) {
    			_errorLogin.addClass('notify--error-hide');
    			
    		}

    		_inputEmail.on('focus', function(){
				_emailError.addClass('notify--error-hide');
				_emailWrong.addClass('notify--error-hide');
				_errorLogin.addClass('notify--error-hide');

			});

			_inputPassword.on('focus', function(){
				_passwordError.addClass('notify--error-hide');
				_errorLogin.addClass('notify--error-hide');

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