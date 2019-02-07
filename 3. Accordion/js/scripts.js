$('.question').on('click', function(){
  var answer = $(this).next();
  $('.answer').not(answer).slideUp(400);
  answer.slideToggle(400);
});

