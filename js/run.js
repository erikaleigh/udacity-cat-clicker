
// Cats object
var kitties = [{
    "name": "Oryx",
    "img": "img/oryx.jpg",
    "index": 1,
    "clicks": 0
  },{
    "name": "Crake",
    "img": "img/crake.jpg",
    "index": 2,
    "clicks": 0
  }]

// append cats
var appendCats = function() {
  var catDiv = document.getElementById("cat");

  for (var i = 0; i < kitties.length; i++) {

    var catName = document.createElement('h3');
    catName.innerHTML = kitties[i].name;
    catDiv.appendChild(catName);

    var catClicks = document.createElement('p');
    catClicks.innerHTML = kitties[i].clicks;
    catDiv.appendChild(catClicks);

    var catImg = document.createElement('img');
    catImg.src = kitties[i].img;
    catDiv.appendChild(catImg);


  }

}
  appendCats();

var catName = '<h4></h4>'



// // event listener - counts the amount of clicks on a cat
// var elem = document.getElementById('catOne');
// var clickCount = document.getElementById('clicks');
// var num = 0;
//
// elem.addEventListener('click', function(){
//       num++;
//       clicks.innerHTML = num;
// },false);
