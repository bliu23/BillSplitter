function processReq() {
	var numFields = document.rateSelector.numPeople.value;
	console.log(numFields);

	//tax and tip rate
	var taxRate = document.rateSelector.tax.value / 100;
	var taxMultiplier = 1 + taxRate;
	var tipRate = document.rateSelector.tip.value / 100;
	var tipMultiplier = 1 + tipRate;
	console.log("test: " + taxRate + " " + tipRate);

	//get totalShared and split into how much each person owes due to this.
	var totalShared = document.rateSelector.sharedBill.value;
	var individualShared = totalShared/numFields;

	var totalBill = 0;
	var output = "";
	//get each name and price to pay
	for(var i = 0; i < numFields; i++) {
		//get name and price fom createInputFields();
		var name = document.getElementById('name' + i).value;
		if(name ==="") {
			name = "Person " + (i + 1);
		}
		var priceString = document.getElementById('price' + i).value;
		if(priceString === "") {
			priceString = "0";
		}
		//get the price, add in individual's shared cost
		var price = eval(stripSpaces(priceString));
		price = price + individualShared;
	
		//add in tax and tip
		var total = price * (1 + tipRate + taxRate);
		//accumulate outputs
		output += '<div> ' + name + ' owes $' + total.toFixed(2) + '</div>';
		//add to the total bill
		totalBill += total;
	}
	//add a total bill output
	var totalBillOutput = '<div> The total bill is ' + totalBill.toFixed(2) + '</div>';
	output += totalBillOutput;
	document.getElementById("individualOutput").innerHTML = output;
}


function createInputFields() {
	//get number of people
	var numFields = document.rateSelector.numPeople.value;
	var tot = "";
	for(var i = 0; i < numFields; i++) {
		var name = "<label>Name:</label>" + "<input class='infield' type='text' value='Person_"+i+"' id='name"+i+"'>";
		var price = "<label> Pre-Tax Due:</label>" + "<input class='infield' type='text ' id='price"+i+"'>";
		var input = '<div class="nametax_Input"> ' +name + price + '</div>';
		tot += input;
		//document.getElementById("inputFields").innerHTML += input;
	}
		if(document.getElementById("sharedCheck").checked) {
		tot += "<div class='nametax_Input'> <label> Shared: </label>" + "<input class='infield' type='number' name='sharedBill'> </div>";
	}

	tot += "<input type='button' value='How much we do owe?' onClick='processReq()'>"



//	<input type="button" value="How much do I owe?" onClick="processReq()"></div>';
	document.getElementById("inputFields").innerHTML = tot;
	//style input form
	document.getElementById("inputFields").style.outline="2px solid #000000";
	document.getElementById("inputFields").style.background="#96E5FF"

}



function stripSpaces(str) {
	return str.replace(/ /g,"");
}

function createInputs() {

}