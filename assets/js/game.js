var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  // execute function
    fight();

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
      // Check Enemys Health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
    
};
    
 
  











// This creates a function called fight

// function fight() {
//     window.alert("The fight has begun!");
// }
// // fight();
// var playerName = window.prompt("What is your Robot's name?");
// // Note the lack of quotation marks around playerName
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log("Our robot's name is " + playerName);

// // TYPES OF VAR
// // This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// // This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// // This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;


// // TYPES OF CONSOLE LOGS
// var playerName = "Tony the Robot";

// // Tony the Robot is ready for battle!
// console.log("Tony the Robot" + " is ready for battle!");

// // "Tony the Robot is ready for battle!"
// console.log(playerName + " is ready for battle!");

// // "Your robot, Tony the Robot, has won!
// console.log("Your robot, " + playerName + ", has won!");
