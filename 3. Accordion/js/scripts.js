$('.question').on('click', function(){
  var answer = $(this).next();
  $('.answer').not(answer).slideUp(400);
  answer.slideToggle(400);
});

// Change .slideToggle on .slideDown for always active one class (active)