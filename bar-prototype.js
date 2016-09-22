"use strict";

function countVotes(){
	var unitsTotal = 538;
	var unitsDem = 188;
	var unitsGop = 200;
	var unitsInd = 100;

	document.getElementById("bar-dem").style.width = (unitsDem * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-gop").style.width = (unitsGop * 100 / unitsTotal).toString()+'%';
	document.getElementById("bar-ind").style.width = (unitsInd * 100 / unitsTotal).toString()+'%';
}




