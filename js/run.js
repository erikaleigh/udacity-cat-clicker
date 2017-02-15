
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
  }];

// append cats
var appendCats = function() {
  var catDiv = document.getElementById("catHouse");

  for (var i = 0; i < kitties.length; i++) {

    var catEntry = document.createElement('div');
    catEntry.className = 'col-6 cat';
    catDiv.appendChild(catEntry);

    var catName = document.createElement('h3');
    catName.innerHTML = kitties[i].name;
    catEntry.appendChild(catName);

    var catClicks = document.createElement('p');
    catClicks.className = 'clickCount';
    catClicks.innerHTML = kitties[i].clicks;
    catEntry.appendChild(catClicks);

    var catImg = document.createElement('img');
    catImg.className = 'catImg';
    catImg.src = kitties[i].img;
    catEntry.appendChild(catImg);
  }
};
  appendCats();


// event listener - counts the amount of clicks on a cat, returns new number

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
  var elem = document.getElementsByClassName('catImg');
  var clickCount = document.getElementsByClassName('clickCount');

  for (i = 0; i < elem.length; i++) {
    var num = clickCount[i].innerHTML;
    console.log(num); // logs the current number from clickCount

    elem[i].addEventListener('click', function(){
          var updateNum = num++;
          console.log(updateNum); /* logs the increasing number from clickCount when you click */
          var catEntry = document.getElementsByClassName('cat');
          var p = document.createElement('p');
          // p.appendChild(updateNum);
          // catEntry.appendChild(p);
      });

  }false;
};
clickListen();
