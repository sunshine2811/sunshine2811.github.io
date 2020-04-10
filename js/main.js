$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });
$(function() {
	$('#phone').mask('+38(000) 000-0000');	
	$('#applyForm').submit(function(e){
		e.preventDefault();
		var studentName = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		Email.send({
    		SecureToken : "d645d7e9-c59d-4784-9c87-e2ba1b5ac6cf",
    		To : 'j.bokshovan@gmail.com',
    		From : "sashapavluk82@gmail.com",
    		Subject : "Test subject",
    		Body : "And this is the body"
		}).then(
  			message => alert(message)
		);
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
