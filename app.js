const userQuestion =
	"quelle est la capitale qui pourrait être dans le pays egypte ?";

const data = {
	default: [
		{
			keywords: ["egypte", "capitale"],
			response: "la capitale de l'égypte est le Caire",
		},
		{
			keywords: ["france", "capitale"],
			response: "la capitale de la france est paris",
		},

		{
			keywords: ["blague", "carambar"],
			response: "Combien font 0 + 0 ? la tête a toto",
		},

		{
			keywords: ["style", "musique", "quel"],
			response: "j'écoute de la musique latine",
		},
		{
			keywords: ["plat", "préféré", "repas"],
			response: "J'adore les lasagnes",
		},
	],

	debugMeArray: [
		"Pourquoi ?",
		"Reformule ta question.",
		"Reformule ta problématique.",
		"Est-ce que tu es sûr de ce que tu as écrit ?",
		"As-tu affiché du debug (console.log en JS, print_r ou var_dump en PHP, ...) ?",
		"Est-ce que le fichier est bien appelé ?",
		"Où est ton fichier ?",
		"Où est la déclaration de ta fonction ?",
		"Où exécutes-tu ta fonction ?",
		"Où est la déclaration de ta variable ?",
		"Qu'y a-t-il dans ta variable ?",
		"Décris-moi ce que tu veux faire en langage courant.",
		"Que fait ton code ?",
		"Tu as regardé sur Google ?",
		"Google est ton ami ;)",
		"Il manquerait pas un point-virgule ou une parenthèse ?",
		"Est-ce que ton code est bien indenté ?",
		"As-tu regardé dans l'inspecteur du navigateur ?",
		"Prends un papier et un crayon ;)",
		"Fais une pause :)",
		"Que fait cette fonction ?",
	],

	groot: [
		"groot!!!",
		"groot...",
		"groot*",
		"groot??",
		"groot/",
		"groot$",
	],
};

function searchResponseInDefaultMode(userQuestionChars) {
	const userQuestionArray = userQuestionChars.split(" ");
	let maxWordCounter = 0;
	let resultResponse;

	//parcourir chaque élément {keyweords/response} de l'attribut default
	data.default.forEach((defaultElement) => {
		//initialisation du compteur des mots trouvés dans chaque élement parcouru
		let matchedWordsCounter = 0;
		userQuestionArray.forEach((userQuestionWord) => {
			if (defaultElement.keywords.includes(userQuestionWord)) {
				matchedWordsCounter++;
				console.log(defaultElement);
			}
		});

		console.log(matchedWordsCounter);

		if (matchedWordsCounter > maxWordCounter) {
			maxWordCounter = matchedWordsCounter;
			resultResponse = defaultElement.response;

			//resultResponse=" Soyez plus précis dans votre question !";
		}
	});
	//return resultResponse;
	console.log(maxWordCounter);
	if (maxWordCounter < 1) {
		return "veuillez donner plus de précision!";
	} else {
		console.log(resultResponse);
		return resultResponse;
	}
}

//Affiche les modales au chargement de la page
$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});

const question = document.getElementById("question");
const boxQuestion = document.getElementById("boxQuestion");

function addResponseBox() {
	let newBoxResponse = document.createElement("div");
	newBoxResponse.setAttribute("class", `boxResponse`);

	if (btnValue === "default") {
		let defaultOutput = searchResponseInDefaultMode(question.value);
		console.log(defaultOutput);
		newBoxResponse.innerText = defaultOutput;
		document
			.querySelector("#boxQuestion")
			.appendChild(newBoxResponse);
	} else if (btnValue === "groot") {
		let grootOutput = getRandomGroot();
		console.log(grootOutput);
		newBoxResponse.innerText = grootOutput;
		document
			.querySelector("#boxQuestion")
			.appendChild(newBoxResponse);
	} else {
		let debugMeOutput = getRandomDebugMe();
		newBoxResponse.innerText = debugMeOutput;
		document
			.querySelector("#boxQuestion")
			.appendChild(newBoxResponse);
	}
}

//Récupere le text dans la textarea et l'injecte dans la boxQuestion

function addQuestion(e) {
	// Crée une div avec le class box
	let newBoxQuestion = document.createElement("div");
	newBoxQuestion.setAttribute("class", `box`);

	//Rajoute la div avec le contenu de la question
	//let words = false;
	newBoxQuestion.innerText = question.value;
	document.querySelector("#boxQuestion").appendChild(newBoxQuestion);
	//question.value = "";
	document.querySelector(".titleH1").style.display = "none";
	document.querySelector(".grid").style.display = "none";
	addResponseBox();
}

//Récupère tous les inputs radio
const allBtnRadio = document.getElementsByName("mode");

// Récupère une donnée aléatoire sur le tableau groot
function getRandomGroot() {
	const randomGroot =
		data.groot[Math.floor(Math.random() * data.groot.length)];
	//console.log(randomGroot);
	return randomGroot;
}
getRandomGroot();

//Récupère une donnée aléatoire sur le tableau arrayDebugMe
function getRandomDebugMe() {
	const randomDebugMe =
		data.debugMeArray[
			Math.floor(Math.random() * data.debugMeArray.length)
		];
	return randomDebugMe;
}
getRandomDebugMe();

//Boucle pour récupérer la valeur de l'input selectionné
allBtnRadio.forEach((btnRadio) => {
	btnRadio.addEventListener("change", function (e) {
		//Récupère la valeur de l'input sélectionner
		btnValue = e.target.value;

		//Affiche une donnée aléatoire correspondante au tableau de l'input
		//console.log(data.debugMeArray);
		if (btnValue === data.debugMeArray) {
		}

		switch (e.target.value) {
			case "default":
				const test = searchResponseInDefaultMode(question.value);
				ToastDefault.showToast();
				break;

			case "groot":
				const grootResponse = getRandomGroot();
				ToastGroot.showToast();

				break;

			case "debugMe":
				const debugMeResponse = getRandomDebugMe();
				ToastDebug.showToast();
				break;

			default:
				console.log("rien");
		}
	});
});
let ToastGroot = Toastify({
	text: "je s'appelle Groot",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});
let ToastDebug = Toastify({
	text: "Mode DebugMe",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});

let ToastDefault = Toastify({
	text: "Mode normal",
	duration: 2000,
	style: {
		background: "linear-gradient(to right, #00b09b, #96c93d)",
	},
});
