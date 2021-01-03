user = firebase.auth().currentUser;

if (user) {
	$("#userProfileName").html(user.displayName);
	$("#userProfilePhoto").attr("src", user.photoURL);
}

var arr = {
	max: function (array) {
		return Math.max.apply(null, array);
	},

	min: function (array) {
		return Math.min.apply(null, array);
	},

	range: function (array) {
		return arr.max(array) - arr.min(array);
	},

	midrange: function (array) {
		return arr.range(array) / 2;
	},

	sum: function (array) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;
	},

	mean: function (array) {
		return arr.sum(array) / array.length;
	},

	median: function (array) {
		array.sort(function (a, b) {
			return a - b;
		});
		var mid = array.length / 2;
		return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
	},

	modes: function (array) {
		if (!array.length) return [];
		var modeMap = {},
			maxCount = 0,
			modes = [];

		array.forEach(function (val) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}
		});
		return modes;
	},

	variance: function (array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function (num) {
			return Math.pow(num - mean, 2);
		}));
	},

	standardDeviation: function (array) {
		return Math.sqrt(arr.variance(array));
	},

	meanAbsoluteDeviation: function (array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function (num) {
			return Math.abs(num - mean);
		}));
	},

	zScores: function (array) {
		var mean = arr.mean(array);
		var standardDeviation = arr.standardDeviation(array);
		return array.map(function (num) {
			return (num - mean) / standardDeviation;
		});
	},

};


function startCurrentProfileTop() {
	// NECESITO CAMBIAR ESTO. OBTENGO ES EL ITEM DE TOOOOODAS LAS PRUEBAS,
	// Y ESTE TIENE QUE ESTAR ACOMPAÑADO DEL NOMBRE DEL USUARIO
	dataProfile = [
		Object.values(JSON.parse(window.localStorage.getItem('allDataPhase1'))),
		Object.values(JSON.parse(window.localStorage.getItem('allDataPhase2'))),
		Object.values(JSON.parse(window.localStorage.getItem('allDataPhase3')))
	]

	dataProfile.forEach((phase, index) => {
		createElementsOnDom(getPhaseProfile(phase), index);
	});
}

function getPhaseProfile(dataProfile) {
	//ESTO ES EL ARRAY DE TODOS LOS TEST POR FASE
	console.log(dataProfile)
	let newTestObjects = [];
	let testErrorArray = [];
	let testTimeArray = [];

	dataProfile.forEach(testData => {
		newTestObjects.push({
			testTime: findPhaseTestObject(testData).testTime,
			testErrors: findPhaseTestObject(testData).testErrors,
			testUser: findPhaseTestObject(testData).testUser,
			humanTime: findPhaseTestObject(testData).humanTime
		});

		testErrorArray.push(findPhaseTestObject(testData).testErrors);
		testTimeArray.push(findPhaseTestObject(testData).testTime);
	});

	console.log(newTestObjects, "Nuevos objetos")
	console.log(testErrorArray, "Array de errores")
	console.log(testTimeArray, "Array de tiempos")
	//LOS Z-SCORES DE ERROR Y DE TIEMPO FUNCIONAN ALREVEZ,
	//EL MEJOR TIEMPO Y ERROR ES EL QUE ES MENOR, NO MAYOR
	//PARA ESTO NECESITO QUE SE MULTIPLIQUE EN NEGATIVO
	//ES DECIR, EL PEOR ES EL MEJOR.
	let zScoreErrorArray = arr.zScores(testErrorArray)
	let zScoreTimeArray = arr.zScores(testTimeArray)
	console.log(zScoreErrorArray, "z-score-error")
	console.log(zScoreTimeArray, "z-score-tiempo")

	newTestObjects.forEach((newTestObject, index) => {
		newTestObject.zScoreError = zScoreErrorArray[index];
		newTestObject.zScoreTiempo = zScoreTimeArray[index];

		newTestObject.ranking = (newTestObject.zScoreError + newTestObject.zScoreTiempo) / 2;

	});

	newTestObjects.sort((a, b) => {
		if (a.ranking < b.ranking) {
			return -1;
		}
		if (a.ranking > b.ranking) {
			return 1;
		}
		return 0;
	});

	newTestObjects.forEach((newTestObject, index) => {
		newTestObject.zScoreHumanRanking = (index + 1) + "/" + newTestObjects.length;
	});

	newTestObjects.splice(2);

	return newTestObjects;
}

function findPhaseTestObject(testData) {
	let testTime = parseInt(testData.time.m * 600) + parseInt(testData.time.s * 10) + parseInt(testData.time.ms);
	let humanTime = testData.time.m + ":" + testData.time.s + ":" + testData.time.ms;
	return { testTime: testTime, testErrors: testData.totalErrors, testUser: testData.userName, humanTime: humanTime }
}

function createElementsOnDom(phasesData, index) {
	/*
	1era etapa Ranking
	
	--
	Alejandro Salazar
	1/24
	
	Errores: 12
	Tiempo: 00:00:00
	--
	*/
	let phaseContainer = document.createElement("div");
	phaseContainer.classList.add("phaseContainer");

	let phaseTitle = document.createElement("h3");
	phaseTitle.classList.add("phaseTitle");
	phaseTitle.innerHTML = (index + 1) + " etapa Ranking";


	let rankPhaseContainer = document.createElement("div");
	rankPhaseContainer.classList.add("rankPhaseContainer");

	phaseContainer.append(phaseTitle);
	phaseContainer.append(rankPhaseContainer);

	phasesData.forEach(phase => {
		console.log(phasesData, "from last instance")

		let phaseRank = document.createElement("div");
		phaseRank.classList.add("phaseRank");

		rankPhaseContainer.append(phaseRank);
		// ----------------

		let dataContainer = document.createElement("div");
		dataContainer.classList.add("dataContainer");

		// -----------

		let errorsRankContainer = document.createElement("div");
		errorsRankContainer.classList.add("errorsRankContainer");
		
		let errorRankTitle = document.createElement("p");
		errorRankTitle.classList.add("errorRankTitle");
		errorRankTitle.innerHTML = "Errores: ";

		let errorsRank = document.createElement("p");
		errorsRank.classList.add("errorsRank");
		errorsRank.innerHTML = phase.testErrors;

		errorsRankContainer.append(errorRankTitle);
		errorsRankContainer.append(errorsRank);

		// ------------

		let timeRankContainer = document.createElement("div");
		timeRankContainer.classList.add("timeRankContainer");

		let timeRankTitle = document.createElement("p");
		timeRankTitle.classList.add("timeRankTitle");
		timeRankTitle.innerHTML = "Tiempo: ";

		let timeRank = document.createElement("p");
		timeRank.classList.add("timeRank");
		timeRank.innerHTML = phase.humanTime;

		timeRankContainer.append(timeRankTitle);
		timeRankContainer.append(timeRank);

		// ------------

		dataContainer.append(errorsRankContainer);
		dataContainer.append(timeRankContainer);

		// ----------------------

		let userContainer = document.createElement("div");
		userContainer.classList.add("userContainer");

		let userName = document.createElement("p");
		userName.classList.add("userName");
		userName.innerHTML = phase.testUser;

		let userRanking = document.createElement("p");
		userRanking.classList.add("userRanking");
		userRanking.innerHTML = phase.zScoreHumanRanking;

		userContainer.append(userName);
		userContainer.append(userRanking);

		// -------------------

		phaseRank.append(userContainer);
		phaseRank.append(dataContainer);

	});

	document.querySelector(".rankPhaseContainer").append(phaseContainer)
}

startCurrentProfileTop();