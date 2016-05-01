/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 0;
var puck_y = 0;
var speed = 30;

    //function
    function logCoordinates() {
        console.log(puck_x + ', ' + puck_y)
    }

    // move puck down event listener
    if (puck_y == 290){
        document.getElementById('down').addEventListener('click', function() {
        //puck_y += 10;
        document.getElementById('puck').style.top = puck_y + 'px';
      }
    );
      
    }
    else {
        document.getElementById('down').addEventListener('click', function() {
        puck_y += speed;
        document.getElementById('puck').style.top = puck_y + 'px';
        logCoordinates();
      }
    );
              
    }
    // move puck up event listener
        document.getElementById('up').addEventListener('click', function() {
        puck_y -= speed;
        document.getElementById('puck').style.top = puck_y + 'px';
        logCoordinates();
      }
    );

    // move puck right event listener
      document.getElementById('right').addEventListener('click', function() {
        puck_x += speed;
        document.getElementById('puck').style.left = puck_x + 'px';
        logCoordinates();
      }
    );
      
    // move puck left event listener
      document.getElementById('left').addEventListener('click', function() {
        puck_x -= speed;
        document.getElementById('puck').style.left = puck_x + 'px';
        logCoordinates();
      }
    );