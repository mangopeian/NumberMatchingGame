$( document ).ready(function(){

//set up a random number to match
	var Random = Math.floor(Math.random()*101+19);
	console.log(Random);
	$('#number').text(Random);


	var GeneratedNumbers = []
	var total= 0;
	var wins= 0;
	var losses = 0;
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);


//set up random numbers for each crystal
	function fourRandomNumbers(){
		for (var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*11+1);
			GeneratedNumbers.push(num);
		}
		console.log(GeneratedNumbers)
	}

	fourRandomNumbers();


//reset the game
	function reset(){
		Random = Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#number').text(Random);
		GeneratedNumbers = [];
		fourRandomNumbers();
		total= 0;
		$('#combined').text(total);
	}

//add wins
	function yay(){
		alert("Yay! You win!");
			wins++;
			$('#numberWins').text(wins);
			reset();
	}

//add losses
	function loser(){
		alert ("Ooooops! Try again!");
			losses++;
			$('#numberLosses').text(losses);
			reset();
	}



//set up click for crystals
	$('#blue').on('click', function(){
		total = total + GeneratedNumbers[0];
		console.log("New total = " + total);
		$('#combined').text(total);

				if (total == Random){
					yay();
				}
				else if ( total > Random){
					loser();
				}
	})

		$('#yellow').on('click', function(){
			total = total + GeneratedNumbers[1];
			console.log("New total= " + total);
			$('#combined').text(total);

					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		})

		$('#pink').on('click', function(){
			total = total + GeneratedNumbers[2];
			console.log("New total= " + total);
			$('#combined').text(total);

	//sets win/lose conditions
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		})

		$('#purple').on('click', function(){
			total = total + GeneratedNumbers[3];
			console.log("New total= " + total);
			$('#combined').text(total);


						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		})

});
