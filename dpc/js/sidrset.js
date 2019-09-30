//sldr スマホ用サイドバー
	$(document).ready(function() {
		$('.navbar .container .btn.btn-navbar')
			.attr('data-toggle', '')
			.attr('data-target', '')
			.sidr({
			source: '.navbar .container .navbar-nav'
			});
		});