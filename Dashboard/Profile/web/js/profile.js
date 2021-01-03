user = firebase.auth().currentUser;

if (user) {
    $("#userProfileName").html(user.displayName);
    $("#userProfilePhoto").attr("src", user.photoURL);
}

var arr = {	
	max: function(array) {
		return Math.max.apply(null, array);
	},
	
	min: function(array) {
		return Math.min.apply(null, array);
	},
	
	range: function(array) {
		return arr.max(array) - arr.min(array);
	},
	
	midrange: function(array) {
		return arr.range(array) / 2;
	},

	sum: function(array) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;
	},
	
	mean: function(array) {
		return arr.sum(array) / array.length;
	},
	
	median: function(array) {
		array.sort(function(a, b) {
			return a - b;
		});
		var mid = array.length / 2;
		return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
	},
	
	modes: function(array) {
		if (!array.length) return [];
		var modeMap = {},
			maxCount = 0,
			modes = [];

		array.forEach(function(val) {
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
	
	variance: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},
	
	standardDeviation: function(array) {
		return Math.sqrt(arr.variance(array));
	},
	
	meanAbsoluteDeviation: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.abs(num - mean);
		}));
	},
	
	zScores: function(array) {
		var mean = arr.mean(array);
		var standardDeviation = arr.standardDeviation(array);
		return array.map(function(num) {
			return (num - mean) / standardDeviation;
		});
	}
};


function startCurrentProfileTop() {
    // NECESITO CAMBIAR ESTO. OBTENGO ES EL ITEM DE TOOOOODAS LAS PRUEBAS,
    // Y ESTE TIENE QUE ESTAR ACOMPAÑADO DEL NOMBRE DEL USUARIO
    dataProfile = [
        Object.values(JSON.parse(window.localStorage.getItem('phase1Data'))),
        Object.values(JSON.parse(window.localStorage.getItem('phase2Data'))),
        Object.values(JSON.parse(window.localStorage.getItem('phase3Data')))
    ]

    dataProfile.forEach(phase => {
        getPhaseProfile(phase);
    });
    
}

function getPhaseProfile (dataProfile) {
    //ESTO ES EL ARRAY DE TODOS LOS TEST POR FASE
    console.log(dataProfile)
    dataProfile.forEach(testData => {
        //POR CADA ELEMENTO DEL ARRAY, O SEA POR CADA TEST OBTENGO EL TIEMPO Y LOS ERRORES
        let testTime = findPhaseTestObject(testData).testTime;
        let testErrors = findPhaseTestObject(testData).testErrors;

        //LO QUE NECESITO HACER ES PUSHEAR TODOS LOS TIEMPOS Y ERRORES EN ARRAYS DISTINTOS
        //Y LUEGO EJECUTAR LA FUNCION NORMALIZADORA PARA TENER EL PORCENTAJE
        
    });
    
}


function findPhaseTestObject(testData) {
    let testTime = testData.time.m / 600 + testData.time.s / 10 + testData.time.ms;
    return { testTime: testTime, testErrors: testData.totalErrors}
}

startCurrentProfileTop();