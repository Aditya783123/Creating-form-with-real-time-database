

class Form{
  constructor(){

  }
  display(){
      //creating heading element and giving it a position
      var title = createElement('h1');
      title.html("Car Racing Game!");
      title.position(280, 100);

      //creating an input box
      var input = createInput("NAME");
      input.position(300, 200);

      //creating play button
      var button = createButton("PLAY");
      button.position(360, 280);
      
      //creating a greeting variable
      var greeting = createElement('h3');

      //creating a function when mouse is clicked on button(mousePressed is an event)
      button.mousePressed(function(){
          input.hide();
          button.hide();
    //fetching the value from the input box
          var name = input.value();

    //increasing player count
           playerCount = playerCount + 1;
    //updating the player name in database
           player.updateName(name);
    //updating the player count in database
           player.updateCount(playerCount);
    //display hello + the name entered in input box
          greeting.html("Hello " + name);
          greeting.position(400, 400);
      });
  }
}