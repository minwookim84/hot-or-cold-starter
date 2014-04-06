
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	/* --- Global Variables --- */
	var randomNum = Math.floor((Math.random()*100)+1); //generate a random integer (randomNum) between 1 and 100
	console.log(randomNum);
	var guessNum; //guessNum : the number guessed by the user
	var diffNum; // declaring diffNum: will be assigned the value Math.abs(randomNum - guessNum)
	
	/* --- addGuess Function: increment count by 1, add guessNum to the list below --- */
	var addGuess = function(){
		var guessCount = +$("#count").text(); //convert count from string to number
		guessCount = guessCount + 1; //increment count by 1
		$("#count").text(guessCount); //change count text
		$("#guessList").append("<li>" + guessNum + "</li>"); //append guessNum to the list below
		diffNum = Math.abs(randomNum-guessNum); //diffNum
		$("input#userGuess").val(""); // Clear the input form.
	};



	/* --- Take Input Number(guessNum) and Give Feedback --- */
	// what is the meaning of putting the argument 'event'?
	$("#guessButton").click(function(event){
		event.preventDefault();
		guessNum = +$("input.text").val(); //assign user input number to the variable guessNum
		if (guessNum == $("input.text").val()){ // if guessNum is a number, execute this.
			if(0 < guessNum && guessNum < 101){ //if guessNum is between 1 and 100, execute this.
				/* --- WHY CAN'T I USE "0 < guessNum < 101" instead ? --- */
				addGuess();
			} else {  //if guessNum is less than 1 or greater than 100, execute this.
				$("h2#feedback").text("Your guess should be a number between 1 and 100. Try Again!");
			}
			
		} else { //if guessNum is not a number, execute this
			$("h2#feedback").text("Your guess should be a number between 1 and 100. Try Again!");
		}
	});
	

	var newGame = function(){
		randomNum = Math.floor((Math.random()*100)+1); //generate new randomNum
		$("#feedback").text("Make your Guess!"); //set the default feedback message
		$("#count").text(0); //set count to 0
		$("#guessList > li").remove(); //remove added guessNum's from the list
	};

	$(".new").click(function(){
		newGame();
	});

});


