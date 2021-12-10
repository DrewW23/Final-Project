var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.summitBtns');
var clear = document.getElementById('clear');


feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa';
}

clear.onclick =function(){
    btn.style.display ='none';
    feild.value = '';
}





type="text/javascript">
		$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});