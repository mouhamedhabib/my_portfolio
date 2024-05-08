var greetings = document.querySelectorAll('.bonjour');
var index = 0;

setInterval(function() {
  for (var i = 0; i < greetings.length; i++) {
    greetings[i].style.display = 'none';
  }
  greetings[index].style.display = 'block';
  index = (index + 1) % greetings.length;
}, 1500); 
