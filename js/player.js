class Player{
    constructor(){

 }
 getCount(){
     var playerCountRef = database.ref('playerCount');
     playerCountRef.on("value",function(data){
         
        playerCount : data.val()
      console.log(playerCount);
     });
 }
updateCount(count){
    database.ref('/').update({
     playerCount : count    
    });
    }
updateName(name){
    var playerIndex = 'player'+ playerCount;
    console.log(playerIndex);
    database.ref(playerIndex).set({
        name : name
    });
}
}
