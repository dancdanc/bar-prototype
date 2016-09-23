"use strict";

	var electionType = "S"; // (P)residential, (H)ouse, (S)enate
	var unitsTotal = 538; // Total number of seats/electives available
	var unitsDem = 188; // Total number of seats/electives won by democrats
	var unitsGop = 200; // Total number of seats/electives won by republicans
	var unitsInd = 100; // Total number of seats/electives won by independents, summed up
	var unitsSenDem = 10; // Total number of democratic senate seats not up for election
	var unitsSenGop = 10; // Total number of republican senate seats not up for election
	var unitsSenInd = 10; // Total number of independent senate seats not up for election

function initialVotes(){	// Gets initial vote values.
	document.getElementById("electiontype").value = electionType;
	document.getElementById("unitstotal").value = unitsTotal;
	document.getElementById("unitsdem").value = unitsDem;
	document.getElementById("unitsgop").value = unitsGop;
	document.getElementById("unitsind").value = unitsInd;
	document.getElementById("unitssendem").value = unitsSenDem;
	document.getElementById("unitssengop").value = unitsSenGop;
	document.getElementById("unitssenind").value = unitsSenInd;
	checkElection();
	renderVotes();	
}

function updateVotes(){		// For manually updating data
	electionType = document.getElementById("electiontype").value;
	unitsTotal = document.getElementById("unitstotal").value;
	unitsDem = document.getElementById("unitsdem").value;
	unitsGop = document.getElementById("unitsgop").value;
	unitsInd = document.getElementById("unitsind").value;
	unitsSenDem = document.getElementById("unitssendem").value;
	unitsSenGop = document.getElementById("unitssengop").value;
	unitsSenInd = document.getElementById("unitssenind").value;
	checkElection();
	renderVotes();
}

function renderVotes(){		// Renders the votes on the bar
	// If the election isn't "Senate", then these are irrelevant. Putting it here as a failsafe against "trash" data.
	if(electionType !== "S"){
		unitsSenDem = 0;
		unitsSenGop = 0;
		unitsSenInd = 0;
	}
	// Not sure if neccessary - Realistically, no independent would manage to win any electives
	if(electionType == "P"){
		unitsInd = 0;
		unitsSenInd = 0;
	}
	document.getElementById("bar-dem").style.width = (unitsDem * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-sen-dem").style.width = (unitsSenDem * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-gop").style.width = (unitsGop * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-sen-gop").style.width = (unitsSenGop * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-ind").style.width = (unitsInd * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-sen-ind").style.width = (unitsSenInd * 100 / unitsTotal).toString()+'%';
}

function checkElection(){	// Shows/hides input boxes
	if(electionType == "S")
		document.getElementById("senateseats").style.display = "block";
	else
		document.getElementById("senateseats").style.display = "none";
	// Shows/hides independents from presidential elections
	if(electionType == "P")
		document.getElementById("unitsind").style.display = "none",
		document.getElementById("unitsindtext").style.display = "none";
	else
		document.getElementById("unitsind").style.display = "block",
		document.getElementById("unitsindtext").style.display = "block";
}