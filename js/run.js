var elem = document.getElementById('kittenOne');
var clickCount = document.getElementById('clicks');
var num = 0;

elem.addEventListener('click', function(){
      num++;
      clicks.innerHTML = num;
},false);
