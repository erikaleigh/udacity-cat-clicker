var elem = document.getElementById('kittenOne');
var clickCount = document.getElementById('clicks');

elem.addEventListener('click', function(){

      var num = Number(clicks.innerHTML);
      var numClicks = num++; 

  console.log(num);
  clicks.innerHTML = numClicks;
},false);
