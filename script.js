
var numberOfWon=0;
var numberOfLost=0;



for(var i=1;i<=5;i++){
    var guess= parseInt(prompt("Guess a number between 1 to 5"));
    var randomNumber= Math.floor(Math.random()*5)+1;
    if(randomNumber==guess){
        document.write("You have won"+"<br>");
        numberOfWon++;
    }
    else{
        document.write("You have lost.The guessing number was ="+ randomNumber +"<br>");
        numberOfLost++;
    }
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Total number of Win =" + numberOfWon+"<br>");
document.write("Total number of Lost =" + numberOfLost+"<br>");
