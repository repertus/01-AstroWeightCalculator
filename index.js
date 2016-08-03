function calculatePlanetWeight() {
	//Collects user weight and selection to calculate weight
	var enteredEarthWeight = document.getElementById('enteredEarthWeight').value;
	var planetSelection = document.getElementById('planetSelection').value;
	var textPlanetSelection = document.getElementById('planetSelection').options[document.getElementById('planetSelection').selectedIndex].text;
	var test = enteredEarthWeight * planetSelection;
	
	//If then statement to determine the correct wording for output
	if (textPlanetSelection=="The Sun" || textPlanetSelection == "The Moon") {
			document.getElementById('weightOutput').textContent = "Your weight on " + textPlanetSelection + " is " + test + " lbs.";
	}	else {
			document.getElementById('weightOutput').textContent = "Your weight on the planet " + textPlanetSelection + " planet is " + test + " lbs.";
	}
	
	//Resets the form to enter a new weight
	document.getElementById('enteredEarthWeight').value= "";
	return 
}

