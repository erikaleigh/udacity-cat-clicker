
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


/* event listener - counts the amount of clicks on a cat, returns new number, appends new number
*/
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
  var elem = document.getElementsByClassName('catImg');  /* Gets instances of the catImg class - event listener will be added to this class */
  var clickCount = document.getElementsByClassName('clickCount'); /* Gets instances of the clickCount class - the innerHTML of this class will increase */

  for (i = 0; i < elem.length; i++) {
    var num = clickCount[i].innerHTML; /* Collects the number that is currently in the clickCount instance - it will increase by 1 when clicked */
    console.log(num); // logs the current number from clickCount

    elem[i].addEventListener('click', function(){
          var updateNum = num++; /* increases the number currently in the clickCount instance */
          console.log(updateNum); /* logs the increasing number from clickCount instance when image is clicked */

          var catEntry = document.getElementsByClassName('cat'); /* Gets instances of the 'cat' class - to append to this? How to refer to just the instance currently being used in the loop - update just the correct instance's number? */
          console.log(catEntry); // logs the catEntry class instances

          // add append here

      });

  }false;
};
clickListen();
