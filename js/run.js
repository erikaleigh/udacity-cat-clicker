
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
  var catDiv = document.getElementById("catHouse");

  for (var i = 0; i < kitties.length; i++) {

    var catEntry = document.createElement('div');
    catEntry.id = 'cat';
    catEntry.className = 'col-6';
    catDiv.appendChild(catEntry);

    var catName = document.createElement('h3');
    catName.innerHTML = kitties[i].name;
    catEntry.appendChild(catName);

    var catClicks = document.createElement('p');
    catClicks.id = 'clickCount';
    catClicks.innerHTML = kitties[i].clicks;
    catEntry.appendChild(catClicks);

    var catImg = document.createElement('img');
    catImg.src = kitties[i].img;
    catImg.id = 'catImg'
    catEntry.appendChild(catImg);
  }
}
  appendCats();


// event listener - counts the amount of clicks on a cat

/* event listener function:
  - target "catImg" id with var elem
  - loop - for every (catImg) entry, do the following:
    - event listen for click - var elem
    - when click happens, run function:
      - take # from clickCount
      - increase by 1 - ++
      - return new value
      - append new value in catClicks.innerHTML (?)
*/

var clickListen = function() {
  var elem = document.getElementById('catImg');
  var clickCount = document.getElementById('clickCount');
  var num = clickCount.innerHTML;


  for (i = 0; i < elem.length; i++) {
    elem.addEventListener('click', function(){
        num++;

  },false);
}
clickListen();
}
