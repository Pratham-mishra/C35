class Form{
    constructor(){

    }
display(){
    var input = createInput("name");
    var button = createButton("play");
    var greeting = createElement("h3");
    input.position(300,160);
    button.position(300,200);
    button.mousePressed(function(){
       input.hide();
       button.hide();
       var name = input.value();
       playerCount = playerCount+1;
       player.updateName(name);
       player.updateCount(playerCount);
      
       greeting.html("hello "+ name);
       greeting.position(300,200);

    });
}
}