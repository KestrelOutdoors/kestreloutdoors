$(document).ready(function() {
    // Hide additional participants based on selection
    $('.hidden_div').hide();

    $('#entry_87174897').change(function() {
	  $('.hidden_div').hide();
	  $('.' + this.value).fadeIn();
    });

	$("#ss-form").validate({meta: "validate"});
});