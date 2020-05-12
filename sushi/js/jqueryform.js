$(function() {
	$('#phone').mask('+38(000) 000-0000');	
	$('#applyForm').submit(function(e){
		e.preventDefault();
		var studentName = $('#name').val();
		var phone = $('#phone').val();
		$('#modal').removeClass('show-my');
		$('#thanks').addClass('show-my');
	});

	$('.showModal').click(function(e){
		$('#modal').addClass('show-my');
		$('#applyForm').data('course', $(this).attr('id'));

	});
	$('#closeModal').click(function(e){
   $('#modal').removeClass("show-my");

 });
$('#closeThanks').click(function(e){
   $('#thanks').removeClass("show-my");
  });
  
});