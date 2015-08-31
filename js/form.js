var main = function() {
	$('.hidden_div').hide();

	$('#entry_87174897').change(function() {
    	$('.hidden_div').hide();
		$('.' + this.value).show();
  });
}

$(document).ready(main);