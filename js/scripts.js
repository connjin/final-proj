// loadData(value); 
var yearPicker = []; 

var perMilFive = ["2015", 7.69, 5.49, 3.45, 2.95, 1.34]; 
var perMilSix = ["2016", 6.66, 10.13, 3.23, 2.9, 1.17]; 

var blackFive = 7.65; 
var naFive = 5.49; 
var hlFive = 3.45; 
var whiteFive = 2.95; 
var aapiFive = 1.34; 

var blackSix = 6.66; 
var naSix = 10.13; 
var hlSix = 3.23; 
var whiteSix = 2.9; 
var aapiSix = 1.17; 

$(document).ready(function() {
	loadData(); 
	buildChart(); 
}); 

function loadData(value) {
	if (value == "2015") {
		$.get("https://thecountedapi.com/api/counted/?year=2015", function(data) {
			parseData(data);
		});
		// console.log("yo"); 
		document.getElementById("black").innerHTML = blackFive;
		document.getElementById("na").innerHTML = naFive;
		document.getElementById("hl").innerHTML = hlFive;
		document.getElementById("white").innerHTML = whiteFive;
		document.getElementById("aapi").innerHTML = aapiFive;
	} 

	if (value == "2016") {
		$.get("https://thecountedapi.com/api/counted/?year=2016", function(data) {
			parseData(data); 
		});
		// console.log("yo"); 

		document.getElementById("black").innerHTML = blackSix;
		document.getElementById("na").innerHTML = naSix;
		document.getElementById("hl").innerHTML = hlSix;
		document.getElementById("white").innerHTML = whiteSix;
		document.getElementById("aapi").innerHTML = aapiSix;
	}
}

function parseData(data) {
	var count = 0; 
	for (var i = 0; i<data.length; i++) {
			yearPicker.push(data[i]); 
			count++; 
	}

	document.getElementById("total-dead").innerHTML = count; 

	var whiteCount = 0; 
	var blackCount = 0; 
	var nativeCount = 0; 
	var hispCount = 0; 
	var aapiCount = 0; 
	for (var i = 0; i<data.length; i++) {
		if (data[i]["race"] == "White") { whiteCount++; }
		if (data[i]["race"] == "Black") { blackCount++; }
		if (data[i]["race"] == "Asian/Pacific Islander") { aapiCount++; }
		if (data[i]["race"] == "Native American") { nativeCount++; }
		if (data[i]["race"] == "Hispanic/Latino") { hispCount++; }
	}

	// popPercent = [(whiteCount/)]
}

function buildChart() {
	var bar = c3.generate({
		bindto: "#bar", 
		data: {
			columns: [perMilFive], 
			type: "bar"
		}, 
		axis: {
			x: {
				type: 'category', 
				categories: ["Black", "Native American", "Hispanic/Latino", "White", "Asian/Pacific Islander"]
			}
		}
	}); 
}

$("#dropdown").change(function(evt) {
	console.log("yoyo");
	var timeSelection = eval($("#dropdown").val()); 
		var chart = c3.generate({
			bindto: '#bar', 
			data: {
				columns: [timeSelection], 
				type: "bar"
			}, 

			axis: {
				x: {
					type: 'category', 
					categories: ["Black", "Native American", "Hispanic/Latino", "White", "Asian/Pacific Islander"]
				}
			},

			legend: {
				show: false
			},

			line: {
				connectNull: true
			}
		});
	}); 


